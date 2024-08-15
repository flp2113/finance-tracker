import { Box } from "@mui/material";
import ContentDivider from "./ContentDivider";
import ItemList from "./ItemList";

function Incomes() {
    return (
        <Box>
            <ContentDivider title='Incomes' />
            <Box>
                <ItemList type='income' />
            </Box>
        </Box>
    );
}

export default Incomes;