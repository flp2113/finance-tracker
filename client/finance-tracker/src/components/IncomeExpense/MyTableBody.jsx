import PropTypes from 'prop-types';
import { TableBody } from "@mui/material";
import { Item } from "./index";

function MyTableBody({ content, type }) {
    return (
        <TableBody>
            {content.map(c => <Item key={c.id} type={type} content={c} />)}
        </TableBody>
    );
}

MyTableBody.propTypes = {
    content: PropTypes.shape([{
        date: PropTypes.string.isRequired,
        stream: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        account: PropTypes.string.isRequired,
    }]).isRequired,
    type: PropTypes.string.isRequired 
};

export default MyTableBody;