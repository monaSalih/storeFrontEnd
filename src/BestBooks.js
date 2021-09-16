import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import RenderFavItem from './RenderFavItem';
import Update from './Update.js';
import { withAuth0 } from '@auth0/auth0-react';


class MyFavoriteBooks extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
 storeDatadataBase:[],
 getFromDataBase:[],
 updateObj:{},
 showForm:false,
 showFormUpdate:false,
 closeFunction:true,
    }
   }
 ////////////////////////////////componentDidMount
 componentDidMount=async()=>{
  const {user}=this.props.auth0
  const dbStoreData=await axios.get(`${process.env.REACT_APP_BACKEND_URL}callFavortItem?email=${user.email}`)
  console.log(dbStoreData.data,"result");
  this.setState({
    storeDatadataBase:dbStoreData.data,
    showForm:true,
  })
  console.log(this.state.storeDatadataBase);
}
//////////////////////////////////delete data
deletFromStorage=async(item)=>{
  const {user}=this.props.auth0
  const id=this.state.storeDatadataBase[item]._id
  console.log(id,"id result in delet function");
const urlDelet=await axios.delete(`${process.env.REACT_APP_BACKEND_URL}deleteItem/${id}`)
this.setState({
  storeDatadataBase:urlDelet.data
})

const dbStoreData=await axios.get(`${process.env.REACT_APP_BACKEND_URL}callFavortItem?email=${user.email}`)
console.log(dbStoreData.data,"delete function result");
this.setState({
  storeDatadataBase:dbStoreData.data,
  showForm:true,
})
}
//////////////////////////////////////update data
updateItem=async(item)=>{
  console.log(item,"item result select");
  const item2=this.state.storeDatadataBase[item]
  this.setState({
    updateObj:item2,
    showFormUpdate:true,
  })
}
  updateinStorage=async(event)=>{
    event.preventDefault()
    const {user}=this.props.auth0
      const itemid=this.state.updateObj._id
      console.log(itemid,"itemid result to update");
      let newUpdate={
        title:event.target.nameItem.value,
        imageUrl:event.target.imgItem.value
      }
      console.log(newUpdate,"newUpdate result");
      const updateUrl=await axios.put(`${process.env.REACT_APP_BACKEND_URL}upDateItem/${itemid}`,newUpdate)
      // this.setState({
      //   storeDatadataBase:updateUrl.data
      // })
      const dbStoreData=await axios.get(`${process.env.REACT_APP_BACKEND_URL}callFavortItem?email=${user.email}`)
      console.log(dbStoreData.data,"update function result");
      this.setState({
        storeDatadataBase:dbStoreData.data,
        showForm:true,
      })
      console.log(this.state.storeDatadataBase,"this.state.storeDatadataBase inside update");
}
handlerClose=()=>{
  console.log("inside close function");
  this.setState({
    closeFunction:false,
  })
  console.log("after close setState");

}
///////////////////////////////////////////  
  render() {
    return(
     <div>
      { this.state.showForm && this.state.storeDatadataBase.map((storeData,idx)=>{
      return  (<RenderFavItem storeData={storeData}
        idx={idx}
        deletFromStorage={this.deletFromStorage}
        updateItem={this.updateItem}
        />)
      })} 

{this.state.showFormUpdate&&
       <Update 
      //  closeFunction={this.state.closeFunction}
       handlerClose={this.handlerClose}
       updateinStorage={this.updateinStorage}
       updateObj={this.state.updateObj}/>
      }
     
     </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
