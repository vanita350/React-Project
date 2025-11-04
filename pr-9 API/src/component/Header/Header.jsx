import { Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';

const Header = () => {
    return (
        <>

            <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
                <Container className="d-flex justify-content-between align-items-center">

                    <Navbar.Brand as={Link} to="/" className="text-danger fs-3 fw-bold">
                        megamart
                    </Navbar.Brand>

                    <Form className="d-flex flex-grow-1 mx-4 position-relative" style={{ maxWidth: '600px' }}>
                        <FormControl
                            type="search"
                            placeholder="Search products, brands..."
                            className="me-2 rounded-pill px-4 py-2 border border-secondary"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-primary rounded-circle position-absolute end-0 top-50 translate-middle-y me-1 p-2 d-flex align-items-center justify-content-center"
                            type="submit"
                            style={{ width: '38px', height: '38px' }}
                        >
                            <FaSearch />
                        </button>
                    </Form>


                    <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2 text-secondary" style={{ cursor: 'pointer' }}>
                            <FaMapMarkerAlt size={18} />
                            <span className="d-none d-md-inline" style={{ fontSize: '14px' }}>Location</span>
                        </div>

                        <div className="d-flex align-items-center gap-2 text-secondary" style={{ cursor: 'pointer' }}>
                            <BsCart size={18} />
                            <span className="d-none d-md-inline" style={{ fontSize: '14px' }}>Cart</span>
                        </div>

                        <div className="d-flex align-items-center gap-2 text-secondary" style={{ cursor: 'pointer' }}>
                            <FaUser size={18} />
                            <span className="d-none d-md-inline" style={{ fontSize: '14px' }}>Profile</span>
                        </div>

                        {/* Add Product Button */}
                        <Link to="/add-product" className="btn btn-outline-primary btn-sm">
                            Add Product
                        </Link>
                    </div>
                </Container>
            </Navbar>



            {/* Hover effect style */}
            <style>
                {`
                    .hover-bg-primary:hover {
                        background-color: #f0f8ff;
                        color: #007bff !important;
                    }
                `}
            </style>
        </>
    );
};

export default Header;
