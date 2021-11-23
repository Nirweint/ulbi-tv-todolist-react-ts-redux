import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {fetchTodosAC} from "../store/action-creators/todo";

export const TodoList: React.FC = () => {
    const {todos, error, limit, loading, page} = useTypedSelector(state => state.todo)
    const {fetchTodosAC, setTodoPageAC} = useActions()

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodosAC(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading in progress...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                todos.map(td => {
                    return (
                        <div key={td.id}>{td.id} {td.title}</div>
                    )
                })
            }
            <div style={{display: 'flex'}}>
                {
                    pages.map(p => {
                        return (
                            <div
                                style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                                onClick={() => setTodoPageAC(p)}
                            >
                                {p}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}