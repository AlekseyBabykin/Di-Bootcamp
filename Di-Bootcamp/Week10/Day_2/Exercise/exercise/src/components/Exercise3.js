import "./Exercise.css";
const Exercise = () => {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div>
      <h1 style={style_header}>This is paragraph</h1>
      <p className="para">
        This is a paragraph. It can contain text and other inline elements.
      </p>

      <a href="https://www.example.com">Visit Example.com</a>

      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />

        <label for="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />

        <input type="submit" value="Submit" />
      </form>

      <img
        src="https://cdn.educba.com/academy/wp-content/uploads/2019/10/HTML-Text-Link.png"
        alt="Example Image"
        width="300"
        height="200"
      />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Exercise;
