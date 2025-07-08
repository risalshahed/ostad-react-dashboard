import EachUser from './EachUser';
import useFetchUsers from '../hook/useFetchUsers';

export default function Users() {
  const users = useFetchUsers();

  return (
    <div>
        <h2 className='font-bold py-5 text-3xl'>
            Users
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                users?.map(user =>
                    <EachUser
                        key={user.id}
                        user={user}
                    />
                )
            }
        </div>
        
    </div>
  )
}
