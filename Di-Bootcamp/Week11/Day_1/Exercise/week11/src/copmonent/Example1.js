import { useState, useEffect } from "react";
import data2 from "../Data/data2.json";

const Example1 = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    setdata(data2.SocialMedias);
  });
  return (
    <>
      {data &&
        data.map((el, i) => (
          <div key={i}>
            <div>{el}</div>
          </div>
        ))}
    </>
  );
};

export default Example1;
