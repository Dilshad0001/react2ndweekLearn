import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Title() {
    const [title, setTitle] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setTitle(data.slice(0, 10)))
    }, []);

    return (
        <div>
            <h1>titles</h1>
            <ul>
                {title.map((data) => (
                    <li key={data.id}>
                        <Link to={`/detail/${data.id}`}>{data.title}</Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Title
