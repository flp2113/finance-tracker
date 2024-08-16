import { Typography } from "@mui/material";

/**
 * Renders user information.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.account - The type of account.
 * @param {number} props.quantity - The quantity of the account.
 * @returns {JSX.Element} The rendered user information.
*/

function UserInfo({ account, quantity }) {
    let acc;
    if (account === 'bank') acc = 'Bank Account';
    else if (account === 'wallet') acc = 'Cash Wallet';
    else if (account === 'savings') acc = 'Savings Account';
    else acc = 'ERROR';

    return (
        <Typography sx={{ color: 'rgb(211, 211, 211)' }}>
            <span style={{ fontWeight: '600' }}>{acc}</span>: ${quantity}
        </Typography>
    );
}

export default UserInfo;