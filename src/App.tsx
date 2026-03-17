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

        <AboutMeCard
            name="Nathan the gamer"
            bio="I love gaming"
            funFact="Favorite games genre is Adventure"
            emoji="🔥"
          />

        <AboutMeCard
          name="Nathan the Chess Player"
          bio="I enjoy learning chess strategies"
          funFact="My favorite piece is the knight"
          emoji="♞"
        />

        <AboutMeCard
          name="Nathan the Developer"
          bio="I like building websites and learning React"
          funFact="This is my first React props project"
          emoji="💻"
        />

        <InterestCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;