import { Typography } from "@mui/material";
import { contentDividerStyles } from './styles/IncomeExpenseStyles.js'

/**
 * Renders a content divider component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to be displayed in the content divider.
 * @returns {JSX.Element} The rendered content divider component.
*/

function ContentDivider({ title }) {
    return <Typography variant="h4" sx={contentDividerStyles}>{title}</Typography>;
}

export default ContentDivider;
