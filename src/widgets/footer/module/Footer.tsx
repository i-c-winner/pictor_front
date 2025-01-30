import {ButtonGroup, Button} from "@mui/material";
import "../styles/footer.scss"
import {Telegram, YouTube, Instagram, Login} from "@mui/icons-material";
import {useNavigate} from "react-router";


function Footer() {
  const navigate = useNavigate();
  function admin() {
    navigate("/admin");
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
        onClick={admin}
      ></Button>

    </ButtonGroup>
  )
}

export {Footer};