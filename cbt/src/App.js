// import logo from './logo.svg';
import './App.css';
import Container from './components/container';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import {Switch} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Container/>} />
      </Routes>
    </Router>
  );
}

export default App;
