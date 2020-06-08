import { createStore, combineReducers } from 'redux';
import repositoriesReducer from '../reducers/repositories';
import filtersReducer from '../reducers/filter';


export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            repositories: repositoriesReducer
        })
    );
    return store;
}
