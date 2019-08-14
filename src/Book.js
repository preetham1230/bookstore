import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import {Table} from 'reactstrap';
import Books from './Books.css';
import { connect } from 'react-redux';
import Popup from './Popup.js';


 class Book extends React.Component{
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      addBook=()=> {
        this.setState({
          showPopup: !this.state.showPopup
        });
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
        <Container>

        <Table>
            <thead>
            <tr>
                <th>Book Name</th>
                <th> Book Price</th> 
                <th>Book Desc</th> 
                
            </tr>
            </thead>    
            
                    <tr>
                        <td>{this.props.bookname}</td>
                        <td>{this.props.bookprice}</td>
                        <td>{this.props.bookcategory}</td>
                        
                    </tr>
            
        </Table>

        </Container>
        </div> 
        
  );
  }
}

const mapstateToProps =state=>({
    
    
    bookname : state.bookname,
    bookprice : state.bookprice,
    bookcategory : state.bookcategory

})

export default connect(mapstateToProps) (Book);