export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat("ko-KR", options);
  return formatter.format(date);
};

export const formatDateTime = (dateTime) => {
  let year = dateTime.getFullYear();
  let month = ("0" + (dateTime.getMonth() + 1)).slice(-2); // getMonth()는 0부터 시작하므로 +1
  let day = ("0" + dateTime.getDate()).slice(-2);
  let hours = ("0" + dateTime.getHours()).slice(-2);
  let minutes = ("0" + dateTime.getMinutes()).slice(-2);

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
