import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'Artemis的个人博客-1'},
                {cid:456,title:'Artemis的个人博客-2'},
                {cid:789,title:'Artemis的个人博客-3'}
            ]
         }
    }
    render() { 
        return ( 
            <div>
                <h2>主页面</h2> 
                <ul>
                    {
                    this.state.list.map((item,index)=>{
                        return (<li key={cid+index}>{item.title}</li>)
                    })
                    }
                </ul>
            </div>  
        );
    }
}
 
export default Index;