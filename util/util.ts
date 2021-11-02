import moment, { Moment } from "moment";

export const getTimeDifference = (time: Moment): string => {
  const differenceInHours = moment().diff(time, "hour");

  if (differenceInHours === 0) return "seconds ago";
  if (differenceInHours === 1) return `${differenceInHours} hour ago`;
  if (differenceInHours < 24) return `${differenceInHours} hours ago`;

  return `${moment().diff(time, "day")} days ago`;
};
