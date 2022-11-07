import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()
    const [displayUser, setDisplayuser] = useState(users)
    const handleDelete = user => {
        const agree = window.confirm(`Are you sure delete:  ${user.name}`)
        if (agree) {
            // console.log('deleting id', user._id);
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user deleted successfully')
                        const remaining = displayUser.filter(usr => usr._id !== user._id)
                        setDisplayuser(remaining)
                    }
                    console.log(data)
                })
        }
    }
    return (
        <div>
            <h3>users:{displayUser.length}</h3>
            <div>
                {
                    displayUser.map(user => <p key={user._id}>
                        {user.name}

                        {user.email}
                        {user.adderss}

                        <Link to={`/update/${user._id}`}><button>update</button></Link>

                        <button onClick={() => handleDelete(user)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Home;