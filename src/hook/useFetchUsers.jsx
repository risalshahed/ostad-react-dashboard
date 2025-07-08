import { useEffect, useState } from 'react'

export default function useFetchUsers() {
    const [users, setUsers] = useState([]);
    
    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return users;
}