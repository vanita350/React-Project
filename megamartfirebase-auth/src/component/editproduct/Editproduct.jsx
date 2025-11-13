import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getproduct, updateproduct } from "../../services/action/MenAction.js";

const Editproduct = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    pname: "",
    pdesc: "",
    category: "",
    pimg: "",
    psize: [],
    Brand: "",
    price: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setInputForm((prev) => ({
        ...prev,
        psize: checked
          ? [...prev.psize, value]
          : prev.psize.filter((v) => v !== value),
      }));
    } else {
      setInputForm({
        ...inputForm,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateproduct(inputForm));
    navigate("/Men");
  };

  useEffect(() => {
    dispatch(getproduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      setInputForm(product);
    }
  }, [product]);

  return (
    <Container className="my-5">
      <Card className="shadow p-4">
        <h3 className="text-center mb-4 text-primary">Edit Product</h3>
        <Form onSubmit={handleSubmit}>
          {/* Product Name */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="pname"
                value={inputForm.pname}
                onChange={handleChanged}
                placeholder="Enter Product Name"
                required
              />
            </Col>
          </Form.Group>

          {/* Description */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="pdesc"
                value={inputForm.pdesc}
                onChange={handleChanged}
                placeholder="Enter Product Description"
                required
              />
            </Col>
          </Form.Group>

          {/* Category */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChanged}
                required
              >
                <option value="">Select Category</option>
                {["T-Shirts", "Jeans", "Shirts", "Jackets"].map((ele, i) => (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Brand */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Brand
            </Form.Label>
            <Col sm="10">
              <Form.Select
                name="Brand"
                value={inputForm.Brand}
                onChange={handleChanged}
                required
              >
                <option value="">Select Brand</option>
                {["Nike", "Adidas", "Puma", "Zara"].map((ele, i) => (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Price */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Price (₹)
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
                placeholder="Enter Product Price"
                required
              />
            </Col>
          </Form.Group>

          {/* Sizes */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Available Sizes
            </Form.Label>
            <Col sm="10" className="d-flex flex-wrap gap-3">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size, i) => (
                <Form.Check
                  key={i}
                  type="checkbox"
                  name="psize"
                  value={size}
                  label={size}
                  checked={inputForm.psize.includes(size)}
                  onChange={handleChanged}
                />
              ))}
            </Col>
          </Form.Group>

          {/* Image URL */}
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="2">
              Image URL
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="pimg"
                value={inputForm.pimg}
                onChange={handleChanged}
                placeholder="Enter Product Image URL"
                required
              />
            </Col>
          </Form.Group>

          {/* Submit Button */}
          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5">
              Update Product
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Editproduct;
