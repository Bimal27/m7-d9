import { Badge, Col, Container, Row } from "react-bootstrap";
import items from '../data/menu.json'

// const smallMenu = items.slice(0, 2)

const Menu = () => (
    <Container>
        {
            items.filter(d => d.price < 7).map(dish => (
                <Row className="justify-content-center my-3">
                    <Col md={8} className="text-center">
                        <img src={dish.image} alt="dish" />
                        <h4>{dish.name}</h4>
                        <Badge variant="danger">{dish.price}</Badge>
                        <Badge variant="warning">{dish.label}</Badge>
                    </Col>
                </Row>
            ))
        }
    </Container>
)

export default Menu