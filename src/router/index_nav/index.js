import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => (
  <div>
    <div>
      <NavLink exact to="/base">基本使用</NavLink> |
      <NavLink to="/url">url参数</NavLink> |
      <NavLink to="/approve">认证</NavLink> |
      <NavLink to="/customLink">自定义链接</NavLink> |
      <NavLink to="/notMatch">未匹配</NavLink> |
      <NavLink to="/redirect">redirect</NavLink>
    </div>
  </div>
)
export default NavBar