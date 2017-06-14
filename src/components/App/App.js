// Vendor
import React, {Component} from 'react';
// App
// import {loadData} from './../../lib/service';
import {Header} from 'Components/Header';


export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    // componentDidMount() {
    //     loadData().then(clashes => this.setState({
    //         data
    //     }));
    // }

    render() {
        return (
            <div>
                <Header />
                Start building your app…
            </div>
        );
    }
};
