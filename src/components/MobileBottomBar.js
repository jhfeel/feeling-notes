import { useNavigate } from "react-router-dom";

const MobileBottomBar = () => {
  const navigate = useNavigate();

  return (
    <div className="MobileBottomBar">
      <div className="bottom-item">
        <div
          className="write-icon clickable"
          onClick={() => {
            navigate("/write");
          }}
        ></div>
      </div>
      <div className="bottom-item">
        <div
          className="home-icon clickable"
          onClick={() => {
            navigate("/");
          }}
        ></div>
      </div>
      <div className="bottom-item clickable">
        <div className="profile-icon"></div>
      </div>
    </div>
  );
};

export default MobileBottomBar;
