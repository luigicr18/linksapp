import React from 'react';

const TableBodyColumn = (props) => {
    return (
        <tr key={props.index}>
            {props.children}
        </tr>
    )
}

export default TableBodyColumn;