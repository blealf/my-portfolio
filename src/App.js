import './App.css';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer';
import LinearProgress from 'components/LinearProgress';

function App() {
  return (
    <div className="app">
      <Header />
      <LinearProgress value="95" />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
