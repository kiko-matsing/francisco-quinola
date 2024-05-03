import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircle, faCode, faHtml5, faCss3, faSquareJs, faReact } from "@fortawesome/free-solid-svg-icons";
import { boxes } from '../data/development'


const Development = () => {

    const [state, setState] = useState(1)

    const handleClick = dir => {
        const prevState = state
        setState(dir ?
            (() => prevState === boxes.length ? 1 : state + 1) :
            (() => prevState === 1 ? boxes.length : state - 1)
        )
    }

    const boxList = boxes.map(box => {
        const activated = box.id === state || false
        return (
            < li className={`carousel-list carousel-${box.id} ${activated ? 'active' : ''}`} >
                <div className="card-title">
                    <h4 className="title">{box.title}</h4>
                </div>
                <div className="card-body">
                    <div className="description">{box.content}</div>
                    <img src={box.image} alt="" />
                </div>
            </li >
        )
    })

    const pagination = boxes.map(box => {
        return (
            <li className="carousel-pagination" >
                <div className="pagination">
                    <FontAwesomeIcon icon={faCircle} className={`pagination page ${state === box.id ? 'active' : ''}`} />
                </div>
            </li >
        )
    })

    return (
        <div id="development-container">
            <div className="container-main">
                <h2 className="development-title">
                    <FontAwesomeIcon icon={faCode} className="robotIcon" /> Development Tools</h2>
                <button className="button-prev car-button" type='text' onClick={() => handleClick(false)}>
                    <FontAwesomeIcon icon={faChevronLeft} className="left chevron" />
                </button>
                <button className="button-next car-button" type='text' onClick={() => handleClick(true)}>
                    <FontAwesomeIcon icon={faChevronRight} className="right chevron" />
                </button>
                <ul className='main-carousel' >
                    {boxList}
                </ul>
                <ul className='main-pagination'>
                    {pagination}
                </ul>
            </div >
        </div>
    )
}

export default Development