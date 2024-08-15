import { Typography } from "@mui/material";

function UserInfo({ account, quantity }) {
    let acc;
    if(account === 'bank') acc = 'Bank Account';
    else if(account === 'wallet') acc = 'Cash Wallet';
    else if(account === 'savings') acc = 'Savings Account';
    else acc = 'ERROR'; 

    return (
        <Typography sx={{ color: 'rgb(211, 211, 211)' }}>
            <span style={{ fontWeight: '600' }}>{acc}</span>: ${quantity}
        </Typography>
    );
}

export default UserInfo;