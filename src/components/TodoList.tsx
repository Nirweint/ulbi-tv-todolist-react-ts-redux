import {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import doc, { addPage, savePDF } from '../pdfCreator';

export const TodoList: React.FC = () => {
    const {todos, error, limit, loading, page} = useTypedSelector(state => state.todo)
    const { isCreatePDF } = useTypedSelector(state => state.app)
    const {fetchTodosAC, setTodoPageAC, setIsCreatePDFAC} = useActions()
   

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodosAC(page, limit)
    }, [page])

    useEffect(() => {
        if (isCreatePDF) {
            addPage()
            doc.text('Hello from TodoList', 10, 20)
            savePDF()
        }
    }, [isCreatePDF])

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