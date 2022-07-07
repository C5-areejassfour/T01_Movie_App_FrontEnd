import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Nav = ({fav}) => {
  const history = useNavigate();

  return (
    <div className="main_nav ">
      <Button
        variant="primary"
        className="nn"
        onClick={(e) => {
          history("/");
        }}
      >
        Home
      </Button>
      <Button
        variant="primary"
        className="nn1"
        onClick={(e) => {
          history("/fav");
        }}
      >
        Favorites
      {fav.length}
      </Button>
    </div>
  );
};
export default Nav;
