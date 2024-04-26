import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {


    return (
        <div className="card">
            <Link to={'/detail/' + props.id}>
                <div className='card-detail'>
                    <h3 className='time-created'>Posted {props.created_at} ago</h3>
                    <h3 className="question">{props.question}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Card;