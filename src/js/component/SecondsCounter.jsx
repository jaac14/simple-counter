import React from 'react'


const SecondsCounter = (props) => {
    return (
        
            <div className='container big-counter'>
                <div className='clock'><i className="fa-regular fa-clock"></i></div>
                <div className='six'>{props.six}</div>
                <div className='five'>{props.five}</div>
                <div className='four'>{props.four}</div>
                <div className='three'>{props.three}</div>
                <div className='two'>{props.two}</div>
                <div className='one'>{props.one}</div>
            </div>
        
    )

}



export default SecondsCounter