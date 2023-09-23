import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const Nav = (props) => {
  <Stack>
    <Button spacing={2} direction={"row"}>Home</Button>
    <Button component=(Link) to="/">Login</Button>
    <Button>Register</Button>
    <Button>Logout</Button>
  </Stack>;
};

export default Nav