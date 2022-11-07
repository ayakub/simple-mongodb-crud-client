import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const update = useLoaderData()

    const [user, setUsers] = useState(update)


    const handleUpdate = event => {
        event.preventDefault()
        // console.log(user)
        fetch(`http://localhost:5000/users/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated')
                    event.target.reset()
                }
            })

    }
    const handleInputChange = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name
        const newUser = { ...user }
        newUser[fieldName] = value;
        setUsers(newUser)

    }

    return (
        <div>
            <h3>update now : {update.name}</h3>
            <form onSubmit={handleUpdate}>
                <input onChange={handleInputChange} defaultValue={update.name} type="text" name="name" id="" /><br />
                <input onChange={handleInputChange} defaultValue={update.adderss} type="text" name="adderss" id="" />
                <br />
                <input onChange={handleInputChange} defaultValue={update.email} type="email" name="email" id="" />
                <br />
                <button type='submit'>update user</button>
            </form>
        </div>
    );
};

export default Update; <h3>update now</h3>