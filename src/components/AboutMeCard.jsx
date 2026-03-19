import { useState } from "react";

function AboutMeCard({ name, bio, funFact, emoji }) {
  const [showMore, setShowMore] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-blue-100 p-6 rounded-xl text-center shadow-md">
      <span style={{ fontSize: "48px" }}>{emoji}</span>

      <h3 className="text-lg font-bold">{name}</h3>
      <p>{bio}</p>

      {showMore && (
        <p className="mt-2">
          <strong>Fun Fact:</strong> {funFact}
        </p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-3 ml-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        👍 {likes}
      </button>
    </div>
  );
}

export default AboutMeCard;