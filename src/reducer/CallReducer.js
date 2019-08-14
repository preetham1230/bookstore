const initialState = [
{
    
    bookname: '3 Idiots',
    bookprice: '$10',
    bookcategory:' fiction',
    bookdescription: 'wow'
}]

function CalReducer(state = initialState, action){

switch(action.type){

    case "BOOKSELECTED": 
            
            return [
                ...state,
                Object.assign({}, action.payload)
              ];

    default:
        return state;
}
}


export default CalReducer;