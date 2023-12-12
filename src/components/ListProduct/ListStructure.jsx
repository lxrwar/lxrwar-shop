import React from 'react';
import styled from 'styled-components';
import Search from './Search';


const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
`
const ListStructure = () => {
    return (
        <ListContainer>
            <h2>Search Box</h2>
            <Search />
        </ListContainer>
    );
};

export default ListStructure;
