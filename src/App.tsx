import React from 'react';
import {UserList} from "./components/UserList";
import {TodoList} from "./components/TodoList";
import Try from "./components/Try";

export const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
          {/* <Try/> */}
        </div>
    );
}

