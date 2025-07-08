import { useState } from "react";
import useFetchUsers from "../hook/useFetchUsers"

export default function Overview() {
    const users = useFetchUsers();

    // console.log(users);

    const [sortKey, setSortKey] = useState('');
    const [isAscending, setIsAscending] = useState(true);

    // Sort Logic
    
    /* 
        -1 -> Ascending Order

        1 -> Descending Order

        0 -> Default    
    
    */

    // const obj = {a: 1, : 2, c: 3, 'bc d': 'ab c' , d: 'dfd dsfgdsfg'}

    // obj.a, obj.b, obj[d]

   
   // Spread Operator
   // arr = [1, 2, 3] [...arr] -> [1, 2, 4, 7, 6, 3]
   
   // city (deeply nested column)
    const sortedUsers = [...users].sort((a, b) => {
        if(!sortKey) return 0;

        // const aVal = 
        const aVal =
            sortKey === 'city'
            ?
            a.address.city
            :
            a[sortKey]

        // const bVal = 
        const bVal =
            sortKey === 'city'
            ?
            b.address.city
            :
            b[sortKey]


        /* 
        Falsy value -> null, undefined, '', 0, false

        if (isAscending == true) -> kisu return korbe
        if (isAscending) -> truthy Value
        
        */

        // [1, 2, 4, 7, 6, 3]
        if(aVal < bVal) {
            if (isAscending) {
              return -1;
            } else {
              return 1;
            }
        }
        // if(aVal < bVal) return isAscending ? -1 : 1;

        // if else -> JavaScript Statement
        // ternary operator -> JavaScript Expression


        if(aVal > bVal) return isAscending ? 1 : -1;

        return 0;
    })

    const handleSort = key => {
        if(sortKey === key) {
            setIsAscending(!isAscending)
            console.log('true', sortKey);
        } else {
            console.log('false', sortKey);
            setSortKey(key);
            setIsAscending(true);
        }
    }


    // all other column

    // console.log(isAscending)
    // console.log('sortKey', sortKey)

    return (
        <div className="py-5">
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th
                            className="text-left p-2 cursor-pointer border-r"
                            onClick={() => handleSort("name")}
                        >
                            Name {sortKey === "name" ? (isAscending ? "▲" : "▼") : ""}
                        </th>
                        <th
                            className="text-left p-2 cursor-pointer border-r"
                            onClick={() => handleSort("email")}
                            >
                            Email {sortKey === "email" ? (isAscending ? "▲" : "▼") : ""}
                        </th>
                        <th
                            className="text-left p-2 cursor-pointer border-r"
                            onClick={() => handleSort("phone")}
                            >
                            Phone {sortKey === "phone" ? (isAscending ? "▲" : "▼") : ""}
                        </th>
                        <th
                            className="text-left p-2 cursor-pointer border-r"
                            onClick={() => handleSort("city")}
                        >
                            City {sortKey === "city" ? (isAscending ? "▲" : "▼") : ""}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                        {
                            sortedUsers?.map(user =>
                                <tr key={user.id} className="border-t hover:bg-gray-50">
                                    <td className="border-r p-2">{user.name}</td>
                                    <td className="border-r p-2">{user.email}</td>
                                    <td className="border-r p-2">{user.phone}</td>
                                    <td className="border-r p-2">{user.address.city}</td>
                                </tr>
                            )
                        }
                    {/* </tr> */}
                </tbody>
            </table>
        </div>
    )
}
