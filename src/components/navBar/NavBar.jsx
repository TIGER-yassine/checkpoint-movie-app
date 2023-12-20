import { Button, Navbar } from "react-bootstrap";
import StarR from "../StarR";
import { RiMovie2Line } from "react-icons/ri";

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
          style={{
            display: "flex",
            color: "white",
            marginLeft: 100,
          }}
        >
          <RiMovie2Line style={{ color: "green" }} />
          <h5 style={{ color: "blueviolet" }}>Movie</h5>
          <h5 style={{ color: "green" }}>/Room</h5>
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
