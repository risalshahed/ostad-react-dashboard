import React from 'react'

export default function EachUser({ user }) {
    // console.log(user);
    const { name, phone, address } = user;

    return (
        <div className='each_user rounded p-5'>
            <h3 className='font-semibold text-xl'>
                {name}
            </h3>
            <h4 className='font-semibold text-lg'>
                <small>City:</small> {address.city}
            </h4>
            <p>
                Contact: <strong>{phone}</strong>
            </p>
        </div>
    )
}
