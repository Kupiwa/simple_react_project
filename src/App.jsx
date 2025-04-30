import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 // import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient("https://ievpmlzqitzbowxkthtz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlldnBtbHpxaXR6Ym93eGt0aHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTU3NDIsImV4cCI6MjA2MDk5MTc0Mn0.FDAWP0PMcGNMp83pr4f_CuD3C55ZWqqfSA4qALUt1KQ");

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
  // const [instruments, setInstruments] = useState([]); 

  // useEffect(() => {
  //   // insertInstruments();
  //   getInstruments();
  // }, []);


  // // async function insertInstruments() {
  // //   const { e } = await supabase.from('instruments').insert({name: "piano"});
  // //   setError(e);
  // // }

  // // the asynchronous function that allows me to fetch rows from my supabase postgres database.
  // async function getInstruments() {
  //   const { data } = await supabase.from("instruments").select();
  //   setInstruments(data);
  // }

  // return (
  //   <>
  //   <h1 id="title">Instruments table</h1>
  //   {/* display the returned instruments  */}
  //   <ul className="instruments-container">
  //     {instruments.map((instrument) => (
  //       <li className="instruments-item" key={instrument.name}>{instrument.name}</li>
  //     ))}
  //   </ul>
  //   </>
  // );
}

export default App;