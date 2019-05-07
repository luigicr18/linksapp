import React from 'react';
import styled from 'styled-components';

const WrapTd = styled.td `
    border: 1px solid gray;
`

const TableBodyRowControl = (props) => {
    return (
        <WrapTd key={props.index}>
            {props.children}
        </WrapTd>
    )
}

export default TableBodyRowControl;