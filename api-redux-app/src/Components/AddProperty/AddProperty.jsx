import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUnqiueId from 'generate-unique-id';
import { useDispatch, useSelector } from 'react-redux';
// The import below was commented out/incorrectly used later, keeping only the correct one.
// import { addNewPropertyAsync } from "../../services/action/propertyAction";
import { useNavigate } from "react-router";
import { addNewProductAsync } from "../../services/action/productAction";

const AddProduct = () => {
    const dispatch = useDispatch();
    // Assuming the state structure is correct for isError, isCreated
    const { isError, isCreated } = useSelector(state => state.productReducer || state);
    const navigate = useNavigate();

    // 1. **ERROR: handleChanged is missing!** (Added below)
    // 2. **ERROR: Duplicate handleSubmit function!** (Removed the incorrect one)
    // 3. **ERROR: Incorrect dispatch action in the second handleSubmit!** (Fixed in the merged/correct one)

    const intialState = {
        id: "",
        productName: "",
        category: "",
        imageUrl: "",
        availableStock: "",
        features: [], // Checkbox array
        description: "",
        price: "",
    }

    const [inputForm, setInputForm] = useState(intialState);

    // FIX 1: Add the missing handleChanged function (Modified from the commented-out version)
    const handleChanged = (e) => {
        const { name, value, type, checked } = e.target;

        // Logic for handling checkbox array for 'features'
        if (type === 'checkbox' && name === 'features') {
            setInputForm((prev) => ({
                ...prev,
                // Add value if checked, otherwise filter it out
                features: checked
                    ? [...prev.features, value]
                    : prev.features.filter(v => v !== value)
            }));
        } else {
            // Logic for all other input types (text, number, select)
            setInputForm({
                ...inputForm,
                [name]: value
            });
        }
    }

    // FIX 2 & 3: Keep the correct handleSubmit logic and remove the duplicate/incorrect one.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert to number for 'availableStock' and 'price'
        const newProduct = {
            ...inputForm,
            availableStock: Number(inputForm.availableStock) || 0,
            price: Number(inputForm.price) || 0,
            // Generate ID here, as it's cleaner than modifying state immediately before dispatch
            id: generateUnqiueId({
                length: 6,
                useLetters: false,
            })
        };

        // Dispatch the CORRECT action name: addNewProductAsync
        dispatch(addNewProductAsync(newProduct));

        // Optional: Clear form after submission if needed, but navigate takes care of it.
        // setInputForm(intialState); 
    }

    // 4. **ERROR: Missing dependency on 'navigate' in useEffect!** (Added below, though navigate is stable)
    useEffect(() => {
        if (isCreated) {
            navigate("/");
        }
    }, [isCreated, navigate]) // Added 'navigate' as a dependency for best practice

    return (
        <>
            <Container>
                <h2>Add Product </h2>
                {/* FIX 5 (Minor): Use conditional rendering for isError, ensuring it exists and is a string/message */}
                {isError && <p className="text-danger">Error: {isError}</p>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formProductName">
                        <Form.Label column sm="3">Product Name</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="text"
                                name="productName"
                                value={inputForm.productName}
                                onChange={handleChanged} // Corrected
                                placeholder="e.g., Smartwatch, Jeans, or Coffee Maker"
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formCategory">
                        <Form.Label column sm="3"> Product Category</Form.Label>
                        <Col sm="9">
                            <Form.Select
                                name="category"
                                value={inputForm.category}
                                onChange={handleChanged} // Corrected
                                aria-label="Select Product Category"
                                required
                            >
                                <option value={""} disabled>Select Category</option>
                                {/* E-commerce Categories */}
                                {['Electronics', 'Clothing', 'Groceries', 'Home & Kitchen', 'Toys', 'Accessories'].map(ele => (
                                    <option key={ele} value={ele}>{ele}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* Checkbox for Features */}
                    <Form.Group as={Row} className="mb-3" controlId="formFeatures">
                        <Form.Label column sm="3">Key Features</Form.Label>
                        <Col className="d-flex flex-wrap gap-4 align-items-center" sm="9">
                            {
                                ['Warranty Included', 'Fast Delivery', 'Eco-Friendly', 'Returnable'].map(ele => (
                                    <Form.Check
                                        key={ele}
                                        type="checkbox"
                                        name="features"
                                        onChange={handleChanged} // Corrected
                                        value={ele}
                                        label={ele}
                                        checked={inputForm.features.includes(ele)}
                                    />
                                ))
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formImageUrl">
                        <Form.Label column sm="3">Image URL</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="text"
                                name="imageUrl"
                                value={inputForm.imageUrl}
                                onChange={handleChanged} // Corrected
                                placeholder="Paste product image URL here"
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formPrice">
                            <Form.Label>Price (₹)</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={inputForm.price}
                                onChange={handleChanged} // Corrected
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formStock">
                            <Form.Label>Available Stock</Form.Label>
                            <Form.Control
                                type="number"
                                name="availableStock"
                                value={inputForm.availableStock}
                                onChange={handleChanged} // Corrected
                                placeholder="Enter stock count"
                                min="0"
                                required
                            />
                        </Form.Group>
                    </Row>

                    {/* Description Textarea */}
                    <Form.Group className="mb-4" controlId="formDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={inputForm.description}
                            onChange={handleChanged} // Corrected
                            placeholder="Provide a detailed description of the product..."
                            required
                        />
                    </Form.Group>

                    <Button type="submit">Add Product</Button>
                </Form>

            </Container>
        </>
    )
};

export default AddProduct;