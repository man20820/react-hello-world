import React, { Component } from 'react';
import YoutubeComp from '../component/YoutubeComp/YoutubeComp';
import LifeCycleComp from './LifeCycleComp/LifeCycleComp';
import Product from './Product/Product';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <br />
                <YoutubeComp
                    time="1.23"
                    title="satu"
                    desc="deskripsi satu"
                />
                <YoutubeComp
                    time="2.34"
                    title="dua"
                    desc="deskripsi dua"
                />
                <YoutubeComp
                    time="3.45"
                    title="tiga"
                    desc="deskripsi tiga"
                />
                <YoutubeComp
                    time="4.56"
                    title="empat"
                    desc="deskripsi empat"
                />
                <YoutubeComp /> */}
                {/* <p>Counter</p>
                <Product /> */}

                <LifeCycleComp />
            </div >
        )
    }
}

export default Home;