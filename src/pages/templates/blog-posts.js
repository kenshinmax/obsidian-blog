import React from 'react';
import { Link } from 'gatsby';

const AllBlogs = ({ pageContext: { allBlogs } }) => {
    {allBlogs.map(blog => (
        <li
            key={blog.id}
            style={{
                textAlign: 'center',
                listStyle: 'none',
                display: 'inline-block'
            }}
        >
            <Link to={`/blog/${blog.name}`}>
                
                <p>{blog.name}</p>
            </Link>
        </li>
    ))}

};

export default AllBlogs;