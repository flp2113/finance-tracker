import Typography from '@mui/material/Typography';

function UserName({ name }) {
    return (
        <Typography variant='h3' sx={{ color: 'rgb(211, 211, 211)' }}>
            {name}
        </Typography>
    );
}

export default UserName;