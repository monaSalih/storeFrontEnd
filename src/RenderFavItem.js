import React from 'react'
import {Card,Button} from 'react-bootstrap'
class RenderFavItem extends React.Component {
    render() {
        return (
            <div>
             <Card style={{ width: '18rem',height:'18rem',marginBottom:'15rem' }}>
  <Card.Img variant="top" src={this.props.storeData.imageUrl}  />
  <Card.Body>
    <Card.Title>{this.props.storeData.title}</Card.Title>
        <Button variant="primary" 
        onClick={()=>{this.props.deletFromStorage(this.props.idx)}}
        >delete</Button>
        <Button variant="primary" style={{ marginLeft:'5rem' }}
        onClick={()=>{this.props.updateItem(this.props.idx)}}
        >update</Button>

  </Card.Body>
</Card>      
            </div>
        )
    }
}

export default RenderFavItem
