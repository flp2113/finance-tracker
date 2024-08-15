import UserProfilePicture from "./UserProfilePicture";
import UserName from "./UserName";
import UserInfo from "./UserInfo";
import Box from '@mui/material/Box';

function UserCard() {
    const userCardStyles = {
        width: '300px',
        height: '400px',
        backgroundColor: 'rgb(37, 37, 37)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        padding: '15px'        
    };

    const userInfoStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    return (
        <Box sx={userCardStyles}>
            <UserProfilePicture />
            <UserName name="Felipe" />
            <Box sx={userInfoStyles}>
                <UserInfo account='bank' quantity={1000} />
                <UserInfo account='wallet' quantity={520} />
                <UserInfo account='savings' quantity={1080} />
            </Box>
        </Box>
    );
}

export default UserCard;