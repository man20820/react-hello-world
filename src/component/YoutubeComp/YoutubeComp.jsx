import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wraper" >
            <div className="img-thumb">
                <img src="https://lifestyle.abs-cbn.com/thumbnail.ashx?t=photos&w=300&h=200&p=2037/29495-10-17-19-bp.jpg"></img>
                <p className="time">7.12</p>
            </div>
            <p className="title">title here</p>
            <p className="desc">desc here</p>
        </div>
    )
}

export default YoutubeComp;