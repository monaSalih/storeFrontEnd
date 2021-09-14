import React from 'react'
import {Card,Button} from 'react-bootstrap'

class CardHome extends React.Component {
   
    render() {
        console.log("result CardHome");
        console.log(this.props.item.imageUrl,"result in caaaaaaaaaaard222222");
        return (
            <div>
                 <Card style={{ width: '18rem',height:'18rem',marginBottom:'15rem' }}>
  <Card.Img variant="top" src={this.props.item.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.item.title}</Card.Title>
        <Button variant="primary" onClick={()=>{this.props.addItemToDataBase(this.props.item)}}>Favorate</Button>
  </Card.Body>
</Card> 
            </div>
        )
    }
}

export default CardHome
