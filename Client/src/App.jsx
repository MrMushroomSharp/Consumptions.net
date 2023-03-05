import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Daily from "./Pages/Daily"
import Browse from './Pages/Browse';

import Navbar from "./Components/Navbar"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='daily' element={<Daily />} />
          <Route path='browse' element={<Browse />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;