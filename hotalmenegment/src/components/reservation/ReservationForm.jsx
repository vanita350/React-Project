import React, { useState } from "react";
import "./ReservationForm.css";

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "deluxe",
    guests: 1,
    rooms: 1,
    checkIn: "",
    checkOut: "",
    specialRequests: "",
    image: null, // uploaded image
  });

  const [reservations, setReservations] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const roomImages = {
    deluxe: "https://via.placeholder.com/150?text=Deluxe+Room",
    executive: "https://via.placeholder.com/150?text=Executive+Room",
    classic: "https://via.placeholder.com/150?text=Classic+Room",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updatedReservations = [...reservations];
      updatedReservations[editingIndex] = formData;
      setReservations(updatedReservations);
      setEditingIndex(null);
    } else {
      setReservations([...reservations, formData]);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      roomType: "deluxe",
      guests: 1,
      rooms: 1,
      checkIn: "",
      checkOut: "",
      specialRequests: "",
      image: null,
    });
  };

  const handleEdit = (index) => {
    setFormData(reservations[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      const updatedReservations = reservations.filter((_, i) => i !== index);
      setReservations(updatedReservations);
      if (editingIndex === index) setEditingIndex(null);
    }
  };

  return (
    <div className="reservation-form-container">
      <h2>{editingIndex !== null ? "Edit Reservation" : "Make a Reservation"}</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
        >
          <option value="deluxe">Deluxe</option>
          <option value="executive">Executive</option>
          <option value="classic">Classic</option>
        </select>

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rooms"
          placeholder="Number of Rooms"
          min="1"
          value={formData.rooms}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
        />

        <textarea
          name="specialRequests"
          placeholder="Special Requests"
          value={formData.specialRequests}
          onChange={handleChange}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit">{editingIndex !== null ? "Update" : "Book Now"}</button>
      </form>

      {reservations.length > 0 && (
        <div className="reservation-list">
          <h3>Booked Reservations</h3>
          <div className="reservation-cards">
            {reservations.map((res, index) => (
              <div className="reservation-card" key={index}>
                <img
                  src={res.image ? res.image : roomImages[res.roomType]}
                  alt={res.roomType}
                />
                <div className="reservation-info">
                  <p><strong>Name:</strong> {res.name}</p>
                  <p><strong>Email:</strong> {res.email}</p>
                  <p><strong>Phone:</strong> {res.phone}</p>
                  <p><strong>Room Type:</strong> {res.roomType}</p>
                  <p><strong>Guests:</strong> {res.guests}</p>
                  <p><strong>Rooms:</strong> {res.rooms}</p>
                  <p><strong>Check-In:</strong> {res.checkIn}</p>
                  <p><strong>Check-Out:</strong> {res.checkOut}</p>
                  <p><strong>Special Requests:</strong> {res.specialRequests}</p>
                </div>
                <div className="reservation-actions">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservationForm;
