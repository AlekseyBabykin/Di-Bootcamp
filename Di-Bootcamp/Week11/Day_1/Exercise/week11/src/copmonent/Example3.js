import { useState, useEffect } from "react";
import data2 from "../Data/data2.json";

const Example3 = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    setdata(data2.Experiences);
    console.log(data);
  });
  return (
    <>
      {data &&
        data.map((el, i) => (
          <div key={i}>
            <div>
              <img src={el.logo} />
            </div>
            <u href={el.url}>{el.companyName}</u>
            <div>
              {el.roles.map((itm) => (
                <div>
                  {" "}
                  <b>{itm.title}</b>
                  <div>
                    {itm.startDate}
                    {itm.location}
                  </div>
                  <div>{itm.description}</div>
                </div>
              ))}
            </div>
            {/* <div>{el.content}</div> */}
          </div>
        ))}
    </>
  );
};

export default Example3;
