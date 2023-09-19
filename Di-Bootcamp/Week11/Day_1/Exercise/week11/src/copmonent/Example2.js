import { useState, useEffect } from "react";
import data2 from "../Data/data2.json";

const Example2 = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    setdata(data2.Skills);
  });
  return (
    <>
      {data &&
        data.map((el, i) => (
          <div key={i}>
            <div>
              <ul>
                <b>{el.Area}</b>
                <br />
                {el.SkillSet.map((item) => (
                  <li>{item.Name}</li>
                ))}
              </ul>
            </div>
            {/* <div>{el.SkillSet[1].Name}</div> */}
          </div>
        ))}
    </>
  );
};

export default Example2;
