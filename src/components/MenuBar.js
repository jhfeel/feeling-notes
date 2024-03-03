import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="MenuBar">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="clickable menu-item"
      >
        {"홈"}
      </div>
      <div className="clickable menu-item">{"프로필"}</div>
      <div
        onClick={() => {
          navigate("/write");
        }}
        className="clickable menu-item"
      >
        {"작성하기"}
      </div>
    </div>
  );
};

export default MenuBar;
