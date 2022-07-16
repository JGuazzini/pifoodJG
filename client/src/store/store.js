import { applyMiddleware, compose} from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux-thunk';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)


export default store;