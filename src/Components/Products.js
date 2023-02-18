import Product from "./Product";
import { Component } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import products from '../products.json'
class Products extends Component {
    constructor(props) {
        super(props);
    }
    state = { visible:false,visible2:false }
    buy=(product)=>{
        product.quantity--;
        this.setState(()=>({ visible:true }));
        setTimeout(()=>{this.setState(()=>({visible:false}))},2000)
    }
    componentDidMount(){
        this.setState(()=>({visible2:true}));
        setTimeout(()=>{this.setState(()=>({visible2:false}))},3000)

    }
    render() { 
        return ( 
            <Container>
            <Row>
           {this.state.visible2 &&  <Alert variant="success">
            <Alert.Heading>Hey, Welcome To Our Shop <strong> MyStore </strong>    </Alert.Heading>
            <p>
            Thank you for choosing our store, we hope you enjoy your shopping experience!
            </p>
            <hr />
          </Alert>
        }
            {products.map((element,index)=>
                <Col key={index}>
                <Product product={element} buyFunction={this.buy}/>
                </Col>
            )}
         {this.state.visible &&   <Alert style={{ marginTop: "30px" }} variant="primary">
            <p>
            You Bought an Item
            </p>
             </Alert>}
        </Row>
        </Container> );
    }
}
 
export default Products;