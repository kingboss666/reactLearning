import React from "react"
import {NavLink} from "react-router-dom"
const Header = () => (
    <header>
        <NavLink exact={true} activeClassName="is-active" to="/">首页</NavLink>
        <NavLink activeClassName="is-active" to="/create">新增预算页面</NavLink>
        <NavLink activeClassName="is-active" to="/edit">编辑预算界面</NavLink>
        <NavLink activeClassName="is-active" to="/help/111">帮助界面</NavLink>
    </header>
)
export default Header