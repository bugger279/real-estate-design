import React from 'react';
import styled from 'styled-components';
import AllDepositsButton from './AllDepositsButton';
import Deposit from './Deposit';
import SortingBar from './SortingBar';

const DepositsCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({theme}) => theme.header};
    color: ${({theme}) => theme.headerNumber};
    width: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-weight: 500;
    color: ${({theme}) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;

`;

const Deposits = ({ data, count, title }) => {
    return (
        <div>
            <Title>{title}<DepositsCount>{count}</DepositsCount></Title>
            <SortingBar />
            {data.map(deposit => (
                <Deposit data={deposit} key={deposit.property.address.street} />
            ))}
            <AllDepositsButton title={title} />
        </div>
    )
}

export default Deposits
