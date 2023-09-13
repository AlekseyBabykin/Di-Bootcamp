import "./User.css";
import React from "react";

class User extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className="infoUsers">
        <div>
          <img src={`https://robohash.org/${info.id}?size=150x150`}></img>
          <h2>{info.name}</h2>
          <p>{info.email}</p>
          <h2>{info.username}</h2>
        </div>
      </div>
    );
  }
}
// const User = (props) => {
//   const { info } = props;
//   console.log("props=>", info);
//   const style = {
//     display: "inline-block",
//     margin: "20px",
//     border: "1px solid cyan",
//     padding: "20px",
//     textAlign: "center",
//   };
//   return (
//     <div className="infoUsers">
//       <div>
//         <img src={`https://robohash.org/${info.id}?size=150x150`}></img>
//         <h2>{info.name}</h2>
//         <p>{info.email}</p>
//         <h2>{info.username}</h2>
//       </div>
//     </div>
//   );
// };

export default User;
