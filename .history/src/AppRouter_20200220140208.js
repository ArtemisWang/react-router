import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/'>列表</Link></li>
            </ul>
            <Route path='/' exact component={Index}/> 
            {/* exect 精确匹配 一般首页需要精确匹配 */}
            <Route path='/list/' component={List}/>
        </Router>
    )
}

export default AppRouter