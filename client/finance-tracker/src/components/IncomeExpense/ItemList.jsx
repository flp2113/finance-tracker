import { Box, Table, TableBody } from "@mui/material";
import { itemListStyles } from "./styles/IncomeExpenseStyles";
import { useState } from "react";
import { MyTableHead, Item } from "./index";

/**
 * Renders a list of items based on the provided type.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of items to render ('incomes' or 'expenses').
 * @returns {JSX.Element} The rendered ItemList component.
*/

function ItemList({ type }) {
    const headCells = ['Date', (type === 'incomes' ? 'Income' : 'Expense') + ' Stream', 'Amount', 'Account'];

    //EXAMPLE OF FETCHING DATA
    const [transactions, setTransactions] = useState([
        {id: 0, date: '12/05/2024', amount: 1000, account: 'Bank', stream: 'Supermercados BH'},
        {id: 1, date: '25/12/2024', amount: 820, account: 'Savings', stream: 'Supermercados EPA'},
        {id: 2, date: '05/02/2022', amount: 275, account: 'Wallet', stream: 'Shopping'},
    ]);

    return (
        <Box sx={itemListStyles}>
            <Table>
                <MyTableHead headCells={headCells} />
                <TableBody>
                    {transactions.map(t => <Item key={t.id} type={type} content={t} />)}
                </TableBody>
            </Table>
        </Box>
    );
}

export default ItemList;