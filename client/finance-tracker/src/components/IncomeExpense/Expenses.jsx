import { Box } from "@mui/material";
import ContentDivider from "./ContentDivider";
import ItemList from "./ItemList";

function Expenses() {
    return (
        <Box>
            <ContentDivider title='Expenses' />
            <Box>
                <ItemList type='expense' />
            </Box>
        </Box>
    );
}

export default Expenses;