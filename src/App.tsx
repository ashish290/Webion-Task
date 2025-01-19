import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import { DetailsProps, UserDetails } from '.';

function App() {

    const [studentDetails, setstudentDetails] = useState<DetailsProps[]>(() => {
      const storedDetails = sessionStorage.getItem("userDetails");
      return storedDetails ? JSON.parse(storedDetails) : UserDetails;
    });
    
    useEffect(() => {
      sessionStorage.setItem("userDetails", JSON.stringify(studentDetails));
    }, [studentDetails]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home studentDetails={studentDetails}  />  } />
        <Route path="/Form" element={<Form studentDetails={studentDetails} setstudentDetails={setstudentDetails}  />} />
        <Route path="/Note" element={<Note/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;