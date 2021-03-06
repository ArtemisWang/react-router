import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

// 设置规则---传递值---接受值---显示内容

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/123'>列表</Link></li>
            </ul>
            <Route path='/' exact component={Index}/> 
            {/* exect 精确匹配 一般首页需要精确匹配 */}
            <Route path='/list/:id' component={List}/>
        </Router>
    )
}

export default AppRouter