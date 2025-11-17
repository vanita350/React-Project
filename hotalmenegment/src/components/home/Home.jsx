
import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const roomsData = [
    {
        id: 1,
        type: "Deluxe Suite",
        price: 250,
        available: true,
        features: ["WiFi", "Sea View", "King Bed"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
        id: 2,
        type: "Standard Room",
        price: 150,
        available: false,
        features: ["WiFi", "Queen Bed"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
        id: 3,
        type: "Executive Suite",
        price: 350,
        available: true,
        features: ["WiFi", "King Bed", "Balcony", "Mini Bar"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAGbzi1KrzhsuKrBcsdl4JfdYXzSocx-MJw&s",
    },
];

function HomePage() {
    const [sortOption, setSortOption] = useState("");
    const [filterOption, setFilterOption] = useState("all");

    // Sort rooms
    const sortedRooms = [...roomsData].sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        if (sortOption === "type") return a.type.localeCompare(b.type);
        return 0;
    });

    // Filter rooms
    const filteredRooms = sortedRooms.filter((room) => {
        if (filterOption === "available") return room.available;
        if (filterOption === "unavailable") return !room.available;
        return true; // "all" option
    });

    return (
        <div className="home-wrapper">

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Experience Luxury & Comfort</h1>
                    <p className="hero-subtitle">Your perfect stay begins here</p>
                    <Link to="/rooms">
                        <button className="hero-btn">Explore Rooms</button>
                    </Link>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about">
                <h2 className="section-title">Welcome To Luxe Hotel</h2>
                <p className="about-text">
                    Enjoy an unforgettable stay at our luxury hotel with world-class
                    service, premium rooms, and stunning views. Your comfort is our top
                    priority.
                </p>
            </section>

            {/* FEATURED ROOMS */}
            <section className="rooms">
                <h2 className="section-title">Featured Rooms</h2>

                {/* Sorting & Filtering Controls */}
                <div className="controls" style={{ marginBottom: "1rem" }}>
                    <label>
                        Sort by:&nbsp;
                        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                            <option value="">None</option>
                            <option value="price-asc">Price (Low → High)</option>
                            <option value="price-desc">Price (High → Low)</option>
                            <option value="type">Type (A → Z)</option>
                        </select>
                    </label>

                    <label style={{ marginLeft: "1rem" }}>
                        Filter by availability:&nbsp;
                        <select onChange={(e) => setFilterOption(e.target.value)} value={filterOption}>
                            <option value="all">All</option>
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                    </label>
                </div>

                <div className="room-grid">
                    {filteredRooms.map((room) => (
                        <div key={room.id} className="room-card">
                            <img src={room.image} alt={room.type} />
                            <h3>{room.type}</h3>
                            <p>${room.price} / Night</p>
                            <p>Status: <span className={room.available ? "available" : "unavailable"}>
                                {room.available ? "Available" : "Booked"}
                            </span></p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services">
                <h2 className="section-title">Our Services</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <h3>24/7 Room Service</h3>
                        <p>Round-the-clock assistance for all your needs.</p>
                    </div>

                    <div className="service-card">
                        <h3>Spa & Wellness</h3>
                        <p>Relax and unwind with premium spa treatments.</p>
                    </div>

                    <div className="service-card">
                        <h3>Fine Dining</h3>
                        <p>Experience gourmet dishes made by top chefs.</p>
                    </div>
                </div>
            </section>

            {/* CONTACT BANNER */}
            <section className="contact-banner">
                <h2>Ready for a luxurious stay?</h2>
                <Link to="/reserve">
                    <button className="banner-btn">Book Now</button>
                </Link>
            </section>

        </div>
    );
}

export default HomePage;
