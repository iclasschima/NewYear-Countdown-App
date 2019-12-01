import React, { useEffect, useState } from "react";

export default () => {
    const calculateTimeLeft = () => {
    const difference = +new Date("2020-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="col-3" id='time__div'>
        <div id='time'>
          <h6>{timeLeft[interval]}</h6>
          <span> {interval} </span>
        </div>
      </div>
    );
  });

  return (
    <div className='container-fluid text-center pt-5'>
      <div id='content'>
        <h1>2020</h1>
        <h3>The Beginning Of A New Century</h3>
        <div className='row col-lg-4 col-md-7'>
          {timerComponents.length ? timerComponents : <span id='time__up'>Now Let The Party Begin!!</span>}
        </div>
      </div>
    </div>
  );
}