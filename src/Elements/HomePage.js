import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import Create from '../People/Create';
import Update from '../People/Update';
import Search from '../People/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/homePage" element={<HomePage />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/update' element={<Update />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
}