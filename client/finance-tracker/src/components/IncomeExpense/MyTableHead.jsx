import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { tableHeadStyles } from './styles/IncomeExpenseStyles.js'

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