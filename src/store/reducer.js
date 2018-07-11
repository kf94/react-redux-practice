import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT :
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT :
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD :
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT :
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT :
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter})
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