import {createStore, Store} from "redux";
import rootReducer from './index';

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
