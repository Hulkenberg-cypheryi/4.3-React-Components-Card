function InterestCard() {
    const hobby = "Playing chess";
    const description = "I enjoy learning strategy";
    const rating = "7/10";
    const emoji = "♟️";
  
    return (
      <div className="card">
        <span style={{ fontSize: "48px" }}>{emoji}</span>
        <h3>{hobby}</h3>
        <p>{description}</p>
        <p><strong>Rating:</strong> {rating}</p>
      </div>
    );
  }
  
  export default InterestCard;