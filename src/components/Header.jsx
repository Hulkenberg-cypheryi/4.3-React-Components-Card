import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-gray-800 text-white">
      <h1 className="text-xl">Nathan's Website</h1>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl mt-2"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <nav className="mt-2">
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </nav>
      )}
    </header>
  );
}

export default Header;