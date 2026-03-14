import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import AboutMeCard from "./components/AboutMeCard";
import InterestCard from "./components/InterestCard";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to my website!</h2>
        <Food />
        <AboutMeCard />
        <InterestCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;