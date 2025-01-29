import {ButtonGroup, Button} from "@mui/material";
import "../styles/footer.scss"
import {Telegram, YouTube, Instagram, Login} from "@mui/icons-material";
import {useNavigate} from "react-router";


function Footer() {
  const navigate = useNavigate();
  function login() {
    navigate("/loginin");
  }
  return (
    <ButtonGroup className="footer">
      <Button
        endIcon={<Telegram/>}
      >
      </Button
      >
      <Button
        endIcon={<Instagram/>}
      >
      </Button>
      <Button
        endIcon={<YouTube/>}
      ></Button>
      <Button
        endIcon={<Login/>}
        onClick={login}
      ></Button>

    </ButtonGroup>
  )
}

export {Footer};