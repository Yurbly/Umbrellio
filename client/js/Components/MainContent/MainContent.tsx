import * as React from 'react';
import MainPanel from "../MainPanel/MainPanel";
import TodoContainer from "../TodoContainer/TodoContainer"

const MainContent: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <MainPanel/>
            <TodoContainer/>
        </div>
    );
};

export default MainContent;