import { Typography } from "@mui/material";
import { contentDividerStyles } from './styles/IncomeExpenseStyles.js'

function ContentDivider({ title }) {
    return (
        <Typography variant="h4" sx={contentDividerStyles}>
            {title}
        </Typography>
    );
}

export default ContentDivider;
