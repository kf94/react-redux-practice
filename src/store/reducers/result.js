import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT :
        console.log(action.val);
            return {
                ...state,
                results: state.results.concat({id: new Date(),val: action.val})
            }
        case actionTypes.DELETE_RESULT :
            // const id = action.val;
            const newArr = state.results.filter(x => (x.id !== action.val))
            console.log(action.val);
            // for (let i = 0; i < newArr.length; i++) {
            //     if (id === newArr[i].id) {
            //         newArr.splice(i,1);
            //     }
            // }
            return {
                ...state,
                results: newArr
            }
        default :
            return state;
    }
};

export default reducer;