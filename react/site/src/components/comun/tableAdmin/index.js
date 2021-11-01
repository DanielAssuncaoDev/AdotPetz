import { TableAdm, Thead, Tbody, Td } from "./styled";


export default function TableAdmin(props) {
    let { columns, rows } = props;

    return (
        <TableAdm size={props.size}>
            
            <Thead>
                <tr>
                    {columns.map((c,id) => 
                        <th key={id}>
                            <div weight="5"> {c.title} </div>
                        </th>
                    )}
                </tr>
            </Thead>

            <Tbody>
                {!props.autoGenerate &&
                    props.children
                }

                {props.autoGenerate === true &&
                    rows.map((row, id) => 
                        <tr key={id}>

                            {row.map((cell, ic) => 
                                <Td key={ic + '.' + id}
                                    config={cell}
                                    onClick={() => cell.onClick ? cell.onClick(row) : null} >
                                    
                                    <div> {cell.value} </div>
                                </Td>
                            )}

                        </tr>    
                )}
            </Tbody>

        </TableAdm>
    )
}

