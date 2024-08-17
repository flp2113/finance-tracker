import PropTypes from 'prop-types';
import { Box, Table, TableBody } from "@mui/material";
import { itemListStyles } from "./styles/IncomeExpenseStyles";
import { useState } from "react";
import { MyTableHead, MyTableBody, Item } from "./index";

/**
 * Renders a list of items based on the provided type.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of items to render ('incomes' or 'expenses').
 * @returns {JSX.Element} The rendered ItemList component.
*/

function ItemList({ type }) {
    const cells = ['Date', (type === 'incomes' ? 'Income' : 'Expense') + ' Stream', 'Amount', 'Account'];

    //EXAMPLE OF FETCHING DATA
    const [content, setContent] = useState([
        {id: 0, date: '12/05/2024', amount: 1000, account: 'Bank', stream: 'Supermercados BH'},
        {id: 1, date: '25/12/2024', amount: 820, account: 'Savings', stream: 'Supermercados EPA'},
        {id: 2, date: '05/02/2022', amount: 275, account: 'Wallet', stream: 'Shopping'},
    ]);

    return (
        <Box sx={itemListStyles}>
            <Table>
                <MyTableHead cells={cells} />
                <MyTableBody content={content} type={type} />
            </Table>
        </Box>
    );
}

ItemList.propTypes = {
    type: PropTypes.string.isRequired
};

export default ItemList;