import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import { ContentDivider, ItemList } from "./index";

/**
 * Renders the IncomesExpenses component.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of income or expense.
 * @returns {JSX.Element} The rendered IncomesExpenses component.
*/

function IncomesExpenses({ type }) {
    return (
        <Box>
            <ContentDivider title={type.charAt(0).toUpperCase() + type.slice(1)}/>
            <Box>
                <ItemList type={type} />
            </Box>
        </Box>
    );
}

IncomesExpenses.propTypes = {
    type: PropTypes.string.isRequired
};

export default IncomesExpenses;