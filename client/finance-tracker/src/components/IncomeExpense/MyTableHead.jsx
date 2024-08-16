import { TableHead, TableRow, TableCell } from '@mui/material';
import { tableHeadStyles } from './styles/IncomeExpenseStyles.js'

/**
 * Renders the table head component.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.headCells - The array of table head cell values.
 * @returns {JSX.Element} The rendered table head component.
*/

function MyTableHead({ headCells }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((_, i) => <TableCell sx={tableHeadStyles} key={i}>{headCells[i]}</TableCell>)}
            </TableRow>
        </TableHead>
    );
}

export default MyTableHead;