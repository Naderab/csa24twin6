import Product from "./Product";
import { Component } from 'react';
import { Col, Container, Row } from "react-bootstrap";

class Products extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Container>
            <Row>
            <Col>
        <Product product={{title:'product1',price:10,likes:10,description:'product'}}/>
        </Col>
        </Row>
        </Container> );
    }
}
 
export default Products;