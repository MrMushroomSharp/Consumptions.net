import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react';

function DailyDish() {
    const [dishList, setDishList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5001/dishes").then((response) => {
            setDishList(response.data)
        })
    }, [])
    let rank = 0;

    return (
        <div className="dishDisplay">
            {dishList.map((dish) => {
                rank += 1;
                return (
                    <div>
                        <h1>#{rank} {dish.name}<br />{dish.upvotes}</h1>
                        <p>{dish.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default DailyDish