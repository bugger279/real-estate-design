import React from 'react';
import styled from 'styled-components'
import Menu from './Menu/Menu';
import ToggleSwitch from './Menu/ToggleSwitch';
import Profile from './Profile';

const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    position: fixed;
    top: 0;
    left: 0;
    width: 16rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Sidebar = () => {
    return (
        <Container>
            <Profile />
            <Menu />
            <ToggleSwitch />
        </Container>
    )
}

export default Sidebar
