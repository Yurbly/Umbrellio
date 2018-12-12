import * as React from 'react';
import {Provider} from 'react-redux';
import MainContent from "../MainContent/MainContent";
import configureStore from '../../reducers/configureStore';

const store = configureStore();

const App: React.FunctionComponent<{}> = () => {
    return (

        <Provider store={store}>
                <MainContent/>
        </Provider>
    );
};

export default App;