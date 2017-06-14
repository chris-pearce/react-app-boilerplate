// Vendor
import React, {Component} from 'react';
import axios from 'axios';
// App
// import {Header} from 'Components/Header';
// import {loadData} from './../../lib/service';


export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        axios.get('http://www.reddit.com/r/reactjs.json')
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);

                this.setState({
                    posts,
                });
            });
    }

    // componentDidMount() {
    //     fetch('https://api.github.com/users/chris-pearce')
    //         .then(response => {
    //             if(!response.ok) {
    //                 throw Error('Network request failed');
    //             }
    //         })
    //         .then(d => d.json())
    //         .then(d => {
    //             this.setState({
    //                 data: d,
    //             });
    //         }, () => {
    //             this.setState({
    //                 requestFailed: true,
    //             });
    //         });
    //     loadData().then(res => {
    //         console.log(res);
    //         this.setState({
    //             data: res,
    //         });
    //     }, () => {
    //         this.setState({
    //             requestFailed: true,
    //         });
    //     });
    // }

    render() {
        const {posts} = this.state;

        console.log(posts);

        return (
            <ul>
                {
                    posts.map(item =>
                        <li key={item.id}>{item.title}</li>
                    )
                }
            </ul>
        );
    }
}
