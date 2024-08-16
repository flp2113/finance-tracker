import { TableRow, TableCell } from "@mui/material";
import { tableCellStyle } from "./styles/IncomeExpenseStyles.js";

/**
 * Renders a single item in the IncomeExpense component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the item ('incomes' or 'expenses').
 * @param {Object} props.content - The content of the item.
 * @param {string} props.content.date - The date of the item.
 * @param {string} props.content.stream - The stream of the item.
 * @param {number} props.content.amount - The amount of the item.
 * @param {string} props.content.account - The account of the item.
 * @returns {JSX.Element} The rendered Item component.
*/

function Item({ type, content }) {
    return (
        <TableRow>
            <TableCell sx={tableCellStyle}>{content.date}</TableCell>
            <TableCell sx={tableCellStyle}>{content.stream}</TableCell>
            <TableCell sx={tableCellStyle}>{type === 'incomes' ? '+$' : '-$'}{content.amount}</TableCell>
            <TableCell sx={tableCellStyle}>{content.account}</TableCell>
        </TableRow>
    );
}

export default Item;