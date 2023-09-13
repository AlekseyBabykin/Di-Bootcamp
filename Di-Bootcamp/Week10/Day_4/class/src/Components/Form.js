// const [inputs, setInputs] = useState({
//     email: "",
//     pass: "",
//     yesno: "",
//     color: "",
//   });

//   const handlInputs = (e) => {
//     // e.target.cheked
//     const value =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setInputs({ ...inputs, [e.target.name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("=>", inputs);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={handleSubmit}>
//           Email:
//           <input name="email" onChange={(e) => handlInputs(e)} />
//           <br />
//           Pasword: <input name="pass" onChange={(e) => handlInputs(e)} />
//           <br />
//           <input type="submit" value="Submit" />
//           <br />
//           YES/NO:{""}
//           <input
//             type="checkbox"
//             name="yesno"
//             onChange={(e) => handlInputs(e)}
//           />
//           <select name="color" onChange={(e) => handlInputs(e)}>
//             <option value="1">Red</option>
//             <option value="2">Yellow</option>
//             <option value="3">bleck</option>
//           </select>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;
