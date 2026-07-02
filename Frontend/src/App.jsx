import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
