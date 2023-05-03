import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom" ;

const Leftnav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))

    }, [])
    return (
        <div>
           <h4>All Categories</h4>
         <div className='ps-4 '>
         {
            categories.map(category => <p key={category.id}
            >
           <Link to={`/category/${category.id}`} className='text-black text-dedcoration'>{category.name}</Link>
            </p>)
           }
         </div>
        </div>
    );
};

export default Leftnav;