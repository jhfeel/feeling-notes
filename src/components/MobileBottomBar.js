import { useNavigate } from "react-router-dom";

const MobileBottomBar = () => {
  const navigate = useNavigate();

  return (
    <div className="MobileBottomBar">
      <div
        className="bottom-item clickable"
        onClick={() => {
          navigate("/write");
        }}
      >
        <div className="write-icon"></div>
      </div>
      <div
        className="bottom-item clickable"
        onClick={() => {
          navigate("/");
        }}
      >
        <div className="home-icon"></div>
      </div>
      <div className="bottom-item clickable">
        <div className="profile-icon"></div>
      </div>
    </div>
  );
};

export default MobileBottomBar;
