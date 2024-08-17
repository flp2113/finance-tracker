import PropTypes from 'prop-types';
import { TableHead, TableRow, TableCell } from '@mui/material';
import { tableHeadStyles } from './styles/IncomeExpenseStyles.js'

/**
 * Renders the table head component.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.cells - The array of table head cell values.
 * @returns {JSX.Element} The rendered table head component.
*/

function MyTableHead({ cells }) {
    return (
        <TableHead>
            <TableRow>
                {cells.map((_, i) => <TableCell sx={tableHeadStyles} key={i}>{cells[i]}</TableCell>)}
            </TableRow>
        </TableHead>
    );
}

MyTableHead.propTypes = {
    cells: PropTypes.array.isRequired
};

export default MyTableHead;