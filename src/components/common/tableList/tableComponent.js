import React from 'react';
import styled from 'styled-components';

const WrapTh = styled.th `
    border: 1px solid gray;
    padding: 1em;
`

const TableComponent = (props) => {
    return (
        <table className="table" key='table'>
            <thead key='thead'>
                <tr key='tr'>
                    {props.headers.map((header,i) => 
                        <WrapTh key={'th' + i}>{header}</WrapTh>
                    )}
                </tr>
            </thead>
            <tbody key='body'>
                {props.children}
            </tbody>
        </table>
    )
}

export default TableComponent;
