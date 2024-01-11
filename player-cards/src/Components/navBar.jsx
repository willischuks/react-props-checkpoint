import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



// bootstrap navbar
function TextLinkExample() {
    return (
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Basket-Ball News</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Willis Chuks</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default TextLinkExample;
