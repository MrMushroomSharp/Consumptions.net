import React from 'react'
import DailyDish from '../Components/DailyDish'
import "./Pages.css"

function Daily() {
    return (
        <div className='daily'>
            <div className='title'>
                <h1>Here are the community's top daily dishes.</h1>
            </div>
            <DailyDish />
        </div>
    )
}

export default Daily