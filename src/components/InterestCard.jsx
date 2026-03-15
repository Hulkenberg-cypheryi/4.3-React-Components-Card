function InterestCard() {
  const hobby = "Playing chess";
  const description = "I enjoy learning strategy";
  const rating = "7/10";
  const emoji = "♟️";
  
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-72 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      <span style={{ fontSize: "48px" }}>{emoji}</span>
      <h3>{hobby}</h3>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
}

export default InterestCard;