import React from 'react';
import styled from 'styled-components';


const WrapTd = styled.td `
    border: 1px solid gray;
`
const TableBodyRow = (props) => {
    return (
        <WrapTd key={props.index}>
            {props.text}
        </WrapTd>
    )
}

export default TableBodyRow;