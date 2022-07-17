import { applyMiddleware, compose} from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(
    
    compose(
        applyMiddleware(thunk)
    )
)


export default store;