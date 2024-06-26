const ActionButton = ({ type, text, color, onClick }) => {
  let btnText = text || "";
  let btnColor = color || "";

  if (type === "submit") {
    btnText = "작성완료";
    btnColor = "#f1cbff";
  }
  if (type === "cancel") {
    btnText = "취소하기";
    btnColor = "white";
  }
  if (type === "edit") {
    btnText = "수정하기";
    btnColor = "#efefef";
  }
  if (type === "remove") {
    btnText = "삭제하기";
    btnColor = "#efefef";
  }

  return (
    <button
      className="ActionButton clickable"
      onClick={onClick}
      style={{ backgroundColor: btnColor }}
    >
      {btnText}
    </button>
  );
};

export default ActionButton;
