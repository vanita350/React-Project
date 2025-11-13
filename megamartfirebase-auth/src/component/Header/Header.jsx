import { useState } from "react";
import { Container, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate("/"); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/"); 
    };

    const isAddProductPage = location.pathname === "/add-product";
    const isMenPage = location.pathname === "/Men"; 

    return (
        <>
         
            <Navbar bg="light" expand="lg" className="py-3 border-bottom">
                <Container className="d-flex justify-content-between align-items-center">
              
                    <Navbar.Brand href="/" className="text-danger fs-3 fw-bold">
                        megamart
                    </Navbar.Brand>

                 
                    <Form className="d-flex flex-grow-1 mx-4" style={{ maxWidth: "600px" }}>
                        <FormControl
                            type="search"
                            placeholder="Search: Shirts"
                            className="me-2 rounded-pill px-3"
                            aria-label="Search"
                        />
                    </Form>

       
                    <div className="d-flex align-items-center gap-4">
                        <FaMapMarkerAlt size={18} />
                        <BsCart size={18} />
                        <FaUser size={18} />

                        {!isLoggedIn && !isMenPage && !isAddProductPage && (
                            <>
                                <Link to="/register" className="btn btn-outline-primary btn-sm">
                                    Register
                                </Link>
                                <button
                                    onClick={handleLogin}
                                    className="btn btn-primary btn-sm"
                                >
                                    Login
                                </button>
                            </>
                        )}

                        {isLoggedIn && !isAddProductPage && (
                            <>
                                <Link to="/add-product" className="btn btn-outline-success btn-sm">
                                    Add Product
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-danger btn-sm"
                                >
                                    Logout
                                </button>
                            </>
                        )}

                        {isLoggedIn && isAddProductPage && (
                            <button
                                onClick={handleLogout}
                                className="btn btn-danger btn-sm"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </Container>
            </Navbar>

            <Navbar bg="light" className="py-2 shadow-sm">
                <Container>
                    <Nav className="mx-auto d-flex justify-content-center gap-3">
                        <Nav.Link href="/Men">Men</Nav.Link>
                        <Nav.Link href="#">Women</Nav.Link>
                        <Nav.Link href="#">Kids</Nav.Link>
                        <Nav.Link href="#">Footwear</Nav.Link>
                        <Nav.Link href="#">Innerwear</Nav.Link>
                        <Nav.Link href="#">Accessories</Nav.Link>
                        <Nav.Link href="#">Winterwear</Nav.Link>
                        <Nav.Link href="#">Brands</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
