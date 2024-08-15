import { Input } from '@mui/material';
import { useState } from 'react';

function UserProfilePicture() {
    const [pfp, setPfp] = useState("");

    const userProfilePictureStyles = {
        width: '150px',
        height: '150px',
        backgroundColor: 'rgb(211, 211, 211)',
        borderRadius: '100%',
        '&:hover' : { 
            cursor: 'pointer',
            backgroundColor: 'rgb(100, 100, 100)', 
            transition: '0.2s all' 
        }
    };

    const handleFileInput = (event) => {
        const reader = new FileReader();
        const image = event.target.files[0];
        
        reader.addEventListener('load', () => {
            setPfp(reader.result);
        }, false);

        if(image) {
            reader.readAsDataURL(image);
        }
    }

    return (
        <label htmlFor='upload' style={userProfilePictureStyles}>
            <Input onChange={handleFileInput} id='upload' type='file' sx={{ display: 'none' }} />
            <img src={pfp} style={userProfilePictureStyles} />
        </label>
    );
}

export default UserProfilePicture;