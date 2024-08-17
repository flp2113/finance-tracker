import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

/**
 * Renders the user's name.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the user.
 * @returns {JSX.Element} The rendered user name.
*/

function UserName({ name }) {
    return (
        <Typography variant='h3' sx={{ color: 'rgb(211, 211, 211)' }}>
            {name}
        </Typography>
    );
}

UserName.propTypes = {
    name: PropTypes.string.isRequired
};

export default UserName;