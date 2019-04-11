import { combineReducers } from 'redux';
import counter from './counter';
import { connectRouter } from 'connected-react-router';
 
export default (history) => combineReducers({
    router: connectRouter(history),
    counter: counter
});

// export default combineReducers({
//     counter
// });