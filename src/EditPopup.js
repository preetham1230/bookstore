import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import {Table} from 'reactstrap';
import Books from './Books.css';
import { connect } from 'react-redux';



class EditPopup extends React.Component {

    
    constructor(props){
        super(props);
        this.state={
            bookname:"",
            bookprice:"",
            bookcategory:"",
            bookdescription:""
        }
        console.log("edit data",this.props.bookList.bookname)
        

        setTimeout(() =>{
            this.setState({
                bookname: this.props.bookList.bookname ,
                bookprice: this.props.bookList.bookprice,
                bookcategory: this.props.bookList.bookcategory,
                bookdescription: this.props.bookList.bookdescription
            })
        },500)
        
    }
    handleInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitting=()=>{
        console.log("Helloo",this.state);
        this.props.dispatch({type: "BOOKSELECTED", payload: this.state});
        document.getElementById("myCheck").click();
        
    }

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <button style={{float:"right"}} onClick={this.props.editPopup} id="myCheck">X</button>
           <div style={{float: "left", margin: "40px"}}>
            <strong><label>Book Name: </label></strong>
             <input type="text" name="bookname" value={this.state.bookname} onChange={this.handleInput}></input> <br></br>
             <strong><label>Book Price: </label></strong>
             <input type="text" name="bookprice" value={this.state.bookprice} onChange={this.handleInput}></input> <br></br>
             <strong><label>Book Category: </label></strong>
             <input type="text" name="bookcategory" value={this.state.bookcategory} onChange={this.handleInput}></input> <br></br>
             <strong><label>Book Description: </label></strong>
             <input type="text" name="bookdescription" value={this.state.bookdescription} onChange={this.handleInput}></input>
             
             <br></br>
             
             <input type="submit" name="sub" value="Submit" onClick={this.submitting}/>
            </div>
          </div>
        </div>
      );
    }
  }

  const mapstateToProps =state=>({
    
    
    bookname : state.bookname,
    bookprice : state.bookprice,
    bookcategory : state.bookcategory

})

export default connect(mapstateToProps) (EditPopup);
