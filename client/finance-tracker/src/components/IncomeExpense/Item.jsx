import { TableRow, TableCell } from "@mui/material";
import { tableCellStyle } from "./styles/IncomeExpenseStyles.js";

function Item({ type, content }) {
    return (
        <TableRow>
            <TableCell sx={tableCellStyle}>{content.date}</TableCell>
            <TableCell sx={tableCellStyle}>{content.stream}</TableCell>
            <TableCell sx={tableCellStyle}>{type === 'income' ? '+$' : '-$'}{content.amount}</TableCell>
            <TableCell sx={tableCellStyle}>{content.account}</TableCell>
        </TableRow>
    );
}

export default Item;