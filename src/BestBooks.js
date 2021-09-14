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
 closeFunction:true
    }
   }
 ////////////////////////////////componentDidMount
 componentDidMount=async()=>{
  const {user}=this.props.auth0
  const dbStoreData=axios.get(`${process.env.REACT_APP_BACKEND_URL}callFavortItem?email=${user.email}`)
  this.setState({
    storeDatadataBase:dbStoreData.data
  })
}
//////////////////////////////////delete data
// deletFromStorage=async(item)=>{
//   const {user}=this.props.auth0
//   const id=this.state.storeDatadataBase[item]._id
// const urlDelet=axios.delet(`${process.env.REACT_APP_BACKEND_URL}deleteSelectItem/${id}`)
// this.setState({
//   storeDatadataBase:urlDelet.data
// })
// }
//////////////////////////////////////update data
// updateItem=async(item)=>{
//   const item2=this.state.storeDatadataBase[item]
//   this.setState({
//     updateObj:item2,
//     showForm:true,
//   })
// }
//   updateinStorage=async(event)=>{
//     event.preventDefualt()
//     const {user}=this.props.auth0
//       const itemid=this.state.storeDatadataBase._id
//       let newUpdate={
//         name:event.target.nameItem.value,
//         img:event.target.imgItem.value
//       }
//       const updateUrl=axios.put(`${process.env.REACT_APP_BACKEND_URL}upDateItem/email=${itemid}`,newUpdate)
//       const dbChoclate=axios.get(`${process.env.REACT_APP_BACKEND_URL}getfavortITem?email=${user.email}`)
//       this.setState({
//         storeDatadataBase:dbChoclate.data
//       })
// }
handlerClose=()=>{
  this.setState({
    closeFunction:false
  })
}
///////////////////////////////////////////  
  render() {
    return(
     <div>
      {/* {this.state.storeDatadataBase.map((storeData,idx)=>{
        <RenderFavItem storeData={storeData}
        idx={idx}
        // deletFromStorage={this.deletFromStorage}
        // updateinStorage={this.updateinStorage}
        />
      })}  */}

{/* {this.state.showForm&&
       <Update 
       handlerClose={this.handlerClose}
       updateItem={this.updateItem}
       updateinStorage={this.updateinStorage}/>
      } */}
     
     </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
