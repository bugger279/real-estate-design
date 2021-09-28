import React from 'react'
import Nav from './Nav'
import styled from 'styled-components';
import NewDepositBtn from './NewDepositBtn';
import Deposits from './Deposits/Deposits';
import dataDeposits from '../../DepositData.json';

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <NewDepositBtn />
      <Deposits title="Active Deposits" count={2} data={dataDeposits.active} />
      <Deposits title="Closed Deposits" count={8} data={dataDeposits.closed} />
    </Container>
  )
}

export default Main
