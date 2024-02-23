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
