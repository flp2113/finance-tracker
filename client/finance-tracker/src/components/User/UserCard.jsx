import { Box } from '@mui/material';
import { cardStyles, infoStyles } from "./styles/UserStyles.js";
import { UserProfilePicture, UserName, UserInfo } from "./index";

/**
 * Renders a user card component.
 *
 * @returns {JSX.Element} The user card component.
*/

function UserCard() {
    return (
        <Box sx={cardStyles}>
            <UserProfilePicture />
            <UserName name='Felipe' />
            <Box sx={infoStyles}>
                <UserInfo account='bank' quantity={1000} />
                <UserInfo account='wallet' quantity={520} />
                <UserInfo account='savings' quantity={1080} />
            </Box>
        </Box>
    );
}

export default UserCard;