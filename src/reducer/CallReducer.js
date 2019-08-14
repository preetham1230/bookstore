const initialState ={
    bookname: '3 Idiots',
    bookprice: '$10',
    bookcategory:' fiction',
    bookdescription: 'wow'
}

function CalReducer(state = initialState, action){

switch(action.type){

    case "BOOKSELECTED": 
        return {
            bookname: action.bookname,
            bookprice: action.bookprice,
            bookcategory: action.bookcategory,
            bookdescription: action.bookdescription            
        }
            //state.concat(action.payload)      
        

    default:
        return state;
}
}


export default CalReducer;