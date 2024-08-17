import { Box } from '@mui/material';
import { cardStyles, infoStyles } from "./styles/UserStyles.js";
import { UserProfilePicture, UserName, UserInfo } from "./index";

/**
 * Renders a user card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the user.
 * @param {Object} props.info - The user's financial information.
 * @param {number} props.info.bank - The amount of money in the user's bank account.
 * @param {number} props.info.wallet - The amount of money in the user's wallet.
 * @param {number} props.info.savings - The amount of money in the user's savings account.
 * @returns {JSX.Element} The rendered user card component.
*/

function UserCard({ name, info }) {
    return (
        <Box sx={cardStyles}>
            <UserProfilePicture />
            <UserName name={name} />
            <Box sx={infoStyles}>
                <UserInfo account='bank' quantity={info.bank} />
                <UserInfo account='wallet' quantity={info.wallet} />
                <UserInfo account='savings' quantity={info.savings} />
            </Box>
        </Box>
    );
}

export default UserCard;