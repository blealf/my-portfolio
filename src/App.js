import './App.css';
import Home from 'components/Home/Home';
import Header from 'components/Nav/Header';
import Footer from 'components/Nav/Footer';
import Resume from 'components/Resume/Resume';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
