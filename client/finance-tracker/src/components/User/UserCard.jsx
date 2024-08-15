import UserProfilePicture from "./UserProfilePicture";
import UserName from "./UserName";
import UserInfo from "./UserInfo";
import Box from '@mui/material/Box';
import { cardStyles, infoStyles } from "./styles/UserStyles.js";

function UserCard() {
    //<UserName name='' /> 'name': name
    //<UserInfo account='' quantity={} /> 'account': [bank, wallet, savings], 'quantity': money
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