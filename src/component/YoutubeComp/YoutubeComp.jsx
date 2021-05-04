import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = () => {
    return (
        <div className="youtube-wraper" >
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/2S24-y0Ij3Y/maxresdefault.jpg"></img>
            </div>
            <p className="title">title here</p>
            <p className="desc">desc here</p>
        </div>
    )
}

export default YoutubeComp;