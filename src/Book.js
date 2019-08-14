import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import {Table} from 'reactstrap';
import Books from './Books.css';
import { connect } from 'react-redux';
import Popup from './Popup.js';
import EditPopup from './EditPopup.js';


 class Book extends React.Component{
    constructor() {
        super();
        this.state = {
          showPopup: false,
          editpopup: false
        };
      }
      addBook=()=> {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

      editBook=()=> {
        this.setState({
          editpopup: !this.state.editpopup
        });
      }

      deleteBook = (data) => {
        console.log("delete data",data.target.value);
        this.props.dispatch({type: "BOOKDELETED", payload: data.target.value});

      }
    
    render(){
  return (
      
      <div style={{float:"left", marginTop: "5px", marginLeft:"10px"}}>
          <button type="button" className= "btn-primary" onClick={this.addBook} style={{align: "left"}}>Add Book</button>
          {this.state.showPopup ? 
            <Popup
              text='Close Me'
              closePopup={this.addBook}
            />
            : null
          }

        {this.state.editpopup ? 
            <EditPopup
              text='Close Me'
              editPopup={this.editBook}
            />
            : null
          }
        <Container>

        <Table>
            <thead>
            <tr>
                <th>Book Name</th>
                <th> Book Price</th> 
                <th>Book Category</th> 
                <th></th>
            </tr>
            </thead>    
            {this.props.books.map((b, i) =>
                    <tr key={i}>
                        <td><button type="button" className= "btn btn-link" onClick={this.editBook}>{b.bookname}</button></td>
                        <td>{b.bookprice}</td>
                        <td>{b.bookcategory}</td>
                        <button type="button" value ={b.bookname}  onClick={this.deleteBook}>Delete</button>
                    </tr>
            )}
        </Table>

        </Container>
        </div> 
        
  );
  }
}

/*const mapstateToProps =state=>({
    
    
    bookname : state.bookname,
    bookprice : state.bookprice,
    bookcategory : state.bookcategory

})*/
const mapstateToProps =state=>({
    
    
  books : state

})

export default connect(mapstateToProps) (Book);
