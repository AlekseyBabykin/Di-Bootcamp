import { useState, useEffect } from "react";
import data from "../Data/data.json";
const PostList = () => {
  const [stateData, setStateData] = useState();
  useEffect(() => {
    setStateData(data);
  }, []);
  return (
    <>
      <div>Hi This is a Title</div>
      {stateData &&
        stateData.map((el, i) => (
          <div key={i}>
            <div>{el.title}</div>
            <div>{el.content}</div>
          </div>
        ))}
    </>
  );
};
export default PostList;
