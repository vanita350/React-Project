
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RoomsPage from './components/roomsPage/RoomsPage';
import ReservationForm from './components/reservation/ReservationForm';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
// import ReservationList from './components/reservationList/ReservationList';
// import UserProfile from './components/profile/UserProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/reservations" element={<ReservationList />} /> */}
        {/* <Route path="/profile" element={<UserProfile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
