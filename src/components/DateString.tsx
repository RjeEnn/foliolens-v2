import React from "react";

const DateString = () => {
  return (
    <p className="bg-indigo-600 text-white p-2 rounded-md">
      Showing Market Activity for {new Date("2022-05-17").toDateString()}
    </p>
  );
};

export default DateString;
