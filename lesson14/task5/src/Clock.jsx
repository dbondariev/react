import React, { useEffect, useState } from "react";
import moment from "moment";
import "./clock.scss";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatOfTime = offset => moment(offset).format("LTS");
const findTimeOffset = offset => formatOfTime(getTimeWithOffset(offset));

const Clock = ({ location, offset }) => {
  const [time, setUpdateTime] = useState(findTimeOffset(offset));

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateTime(findTimeOffset(offset));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
