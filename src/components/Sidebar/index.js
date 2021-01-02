import React from 'react'
import { SidebarContainter, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
const index = ({ toggle, isOpen }) => {
    return (
        <SidebarContainter isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainter>
    )
}
export default index
