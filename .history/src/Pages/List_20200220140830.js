import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>List-page</h2> );
    }
    componentDidMount(){
        console.log(this.props)
    }
}
 
export default Index;