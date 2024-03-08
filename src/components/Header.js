import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="header-left-icon"></div>
      <div
        className="header-title clickable"
        onClick={() => {
          navigate("/");
        }}
      >
        {"Feeling Notes"}
      </div>
      <div className="header-right-icon"></div>
    </div>
  );
};

export default Header;
