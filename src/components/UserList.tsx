import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsersAC} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

export const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.users)
    const {fetchUsersAC} = useActions()

    useEffect(() => {
        fetchUsersAC()
    }, [])

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
        </div>
    );
};

