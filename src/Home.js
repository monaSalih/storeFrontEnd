import React from 'react'
import axios from 'axios'
import {withAuth0} from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import CardHome from './CardHome'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
        dataRenderFromApi:[],
        // showStoreITem:false,
        authUser:{}
                }
    }
    /////////////////////REACT_APP_PORT=http://localhost:3008
componentDidMount=async()=>{
    const outSideApi=await axios.get(`${process.env.REACT_APP_BACKEND_URL}callApiData`)
    this.setState({
      dataRenderFromApi:outSideApi.data,
    //   showStoreITem:true,
    })
    // console.log(this.state.dataRenderFromApi,"dataRenderFromApi ??????????? result");

      }
//////////////////////////////////////add todb
addItemToDataBase=async(item)=>{
    const {user}=this.props.auth0
    
    axios.put(`${process.env.REACT_APP_BACKEND_URL}storeApiDatadb?email=${user.email}`,item)
    }
    render() {
        console.log(this.state.dataRenderFromApi,"this.state.dataRenderFromApi result inside render");
        return (
            <div>
        <Row>
            { 
            this.state.dataRenderFromApi.map(item=>{
                // console.log(item,"item cardHome");
                <CardHome 
                item={item}
                addItemToDataBase={this.addItemToDataBase}
                />
            
            })
            
            }
            
            
            </Row>  
            </div>
        )
       
    }
}

export default withAuth0(Home)
