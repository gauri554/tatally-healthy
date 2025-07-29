import "@/styles/Navbar.css";
import { FiBell } from "react-icons/fi"; // Feather bell icon

export default function Navbar() {
  return (
    <header className="navbar">
      
      <div className="item">
        🇪🇸 <span>Spanish</span>
      </div>
      <div className="item notification">
    <FiBell className="bell" />
  <span className="badge">100</span>
      </div>
      <div className="item">
        <div className="greeting">
        <span>Hello 👋</span>
         <span className="username">Acnoo</span>
         </div>
        <img
          src="https://i.pravatar.cc/32"
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </header>
  );
}


