function AboutMeCard() {
    const name = "Nathan B";
    const bio = "I am a student learning React";
    const funFact = "I can solve a Rubik's cube in under 10 minutes!";
    const emoji = "♟️";
  
    return (
      <div className="bg-blue-100 p-6 rounded-xl">
        <span style={{ fontSize: "48px" }}>{emoji}</span>
        <h3>{name}</h3>
        <p>{bio}</p>
        <p><strong>Fun Fact:</strong> {funFact}</p>
      </div>
    );
  }
  
  export default AboutMeCard;