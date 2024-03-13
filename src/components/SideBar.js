const SideBar = ({ currentPage, noteEntries }) => {
  // const emotionObj = {};

  // const currentDate = new Date();
  // currentDate.setDate(currentDate.getDate() - 6);
  // currentDate.setHours(0, 0, 0, 0);
  // const last7DaysNotes = noteEntries.filter(
  //   (entry) => new Date(entry.timestamp) >= currentDate
  // );
  // const last7DaysEmotions = last7DaysNotes.reduce(
  //   (acc, note) => [...acc, ...note.emotions],
  //   []
  // );

  // // const emotions = {};
  // last7DaysEmotions.forEach((emotion) => {
  //   if (emotionObj.hasOwnProperty(`${emotion}`)) {
  //     emotionObj[`${emotion}`]++;
  //   } else {
  //     emotionObj[`${emotion}`] = 1;
  //   }
  // });

  // const sortedList = Object.entries(emotionObj).sort((a, b) => b[1] - a[1]);
  // const emotionCountList = sortedList.map(([emotion, count], index) => {
  //   return <div key={index}>{`${emotion}: ${count}`}</div>;
  // });

  // return (
  //   <div className="SideBar">
  //     <h4 className="side-content">일주일 간 감정 기록</h4>
  //     <div className="side-content">{emotionCountList}</div>
  //   </div>
  // );

  return <div></div>;
};

export default SideBar;
