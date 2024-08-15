import { Input } from '@mui/material';
import { useState } from 'react';
import { profilePictureStyles } from './styles/UserStyles.js';

function UserProfilePicture() {
    const [pfp, setPfp] = useState("");

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
        <label htmlFor='upload' style={profilePictureStyles}>
            <Input onChange={handleFileInput} id='upload' type='file' sx={{ display: 'none' }} />
            <img src={pfp} style={profilePictureStyles} />
        </label>
    );
}

export default UserProfilePicture;