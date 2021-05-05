import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper" >
            <div className="img-thumb">
                <img src="https://lifestyle.abs-cbn.com/thumbnail.ashx?t=photos&w=300&h=200&p=2037/29495-10-17-19-bp.jpg" alt=""></img>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "judul",
    desc: "deskripsi",
}


export default YoutubeComp;