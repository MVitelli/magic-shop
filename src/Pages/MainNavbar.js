import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="md">
        <Navbar.Brand href="/home">
          <img
            src="http://www.magic4ever.com.ar/image/data/13341111.png"
            width="300"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default MainNavbar;
