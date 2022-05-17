import { useEffect } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import doc, { addPage } from '../pdfCreator'

export const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.users)
    const { isCreatePDF } = useTypedSelector(state => state.app)
    const { fetchUsersAC, setIsCreatePDFAC } = useActions()


    const handleSaveAsPDF = () => {
        setIsCreatePDFAC(true)
    }

    useEffect(() => {
        fetchUsersAC()
    }, [])

    useEffect(() => {
        if (isCreatePDF) {
            addPage()
            doc.text('Hello from userList', 10, 20)
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
            {users.map(u => {
                return (
                    <div key={u.id}>{u.name}</div>
                )
            })}
            <div>
                <button onClick={handleSaveAsPDF}>Save as PDF</button>
            </div>
        </div>
    );
};

