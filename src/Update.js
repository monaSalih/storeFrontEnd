import React from 'react'
import {Form,Button,Modal} from 'react-bootstrap'

class Update extends React.Component {

    render() {
      console.log(this.props.handlerClose,"this.props.handlerClose result");
        return (
            <div>
                              <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>
              <Form onSubmit={(event)=>this.props.updateinStorage(event)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name item</Form.Label>
    <Form.Control type="text" name="nameItem" defaultValue={this.props.updateObj.title} placeholder="nameItem" />
    <Form.Text className="text-muted">
      We'll never share your data with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>imgUrl</Form.Label>
    <Form.Control type="text" name="imgItem" defaultValue={this.props.updateObj.imageUrl} placeholder="imgUrl" />
  </Form.Group>
  
  <Button variant="primary" type="submit" >
    update
  </Button>
</Form>
<Modal.Footer>
    <Button variant="secondary" onClick={this.props.handlerClose}>Close</Button>
     </Modal.Footer>
</Modal.Dialog> 

   
            </div>
        )
    }
}

export default Update
