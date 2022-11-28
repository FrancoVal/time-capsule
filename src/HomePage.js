import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import B from './People/B'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/homePage" element={<HomePage />}/>
        <Route exact path="/b" element={<B/>}/>
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header/>
    </div>
  );
}