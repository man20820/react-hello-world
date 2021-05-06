import React, { Component } from 'react';
import BlogPost from './BlogPost/BLogPost';
//import YoutubeComp from '../component/YoutubeComp/YoutubeComp';
//import LifeCycleComp from './LifeCycleComp/LifeCycleComp';
//import Product from './Product/Product';

class Home extends Component {
    state = {
        showComponent: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: true,
            })
        }, 15000)
    }
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


                {/* <br />
                {
                    this.state.showComponent
                        ?
                        <LifeCycleComp />
                        : null
                }
                <br /> */}
                <p>BlogPost</p>
                <BlogPost />
            </div >
        )
    }
}

export default Home;