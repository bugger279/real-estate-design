import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.4rem 0rem 0.4rem 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
    overflow: hidden;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Icon = styled.span`
    color: ${props => !props.active ? "#aaa5a5": props.theme.activeMenu};
`;

const Title = styled.h2`
    color: ${props => !props.active ? "#aaa5a5": props.theme.activeMenu};
    font-size: 1rem;
    margin-left: 0.9rem;
    font-weight: 300;
`;

const MenuItem = ({title, icon, active}) => {
    return (
        <Container active={active}>
            <Icon active={active} className="iconify" data-icon={`mdi-light:${icon}`}></Icon>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuItem
