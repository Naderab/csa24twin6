import Card from "react-bootstrap/Card";
import { Component } from 'react';
import Button from "react-bootstrap/Button";

class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../assets/images/placeholder.jpg")} />
        <Card.Body>
          <Card.Title>{this.props.product.title}</Card.Title>
          <Card.Text>
          {this.props.product.description}
          </Card.Text>
          <Card.Text>
          {this.props.product.price}
          </Card.Text>
          <Card.Text>
          {this.props.product.likes}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card> );
    }
}
 
export default Product;
