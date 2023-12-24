import { Button, Navbar } from "react-bootstrap";
import StarR from "../StarR";
import { Link } from "react-router-dom";

const NavBar = ({ search, handelesearch, sR, hR }) => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-dark"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Navbar.Brand
          href="#"
          style={{ display: "flex", color: "white", marginLeft: 100 }}
        >
          <Link to={"/"} style={{ display: "flex", textDecoration: "none" }}>
            <h5 style={{ color: "blueviolet" }}>Movie</h5>
            <h5 style={{ color: "green" }}>/Room</h5>
          </Link>
        </Navbar.Brand>
        <div>
          <form action="">
            <input type="text" value={search} onChange={handelesearch} />
            <Button variant="outline-success">Search</Button>
          </form>
          <StarR reat={sR} hR={hR} />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
