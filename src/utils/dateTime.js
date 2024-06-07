export const isoDateStringToLocalFormat = (isoDateString) => {
  const date = new Date(isoDateString);
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

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
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
  let month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
  let day = ("0" + dateTime.getDate()).slice(-2);
  let hours = ("0" + dateTime.getHours()).slice(-2);
  let minutes = ("0" + dateTime.getMinutes()).slice(-2);

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const formatDate = (date) => {
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};
