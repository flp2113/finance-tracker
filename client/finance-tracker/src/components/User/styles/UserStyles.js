const cardStyles = {
    width: '300px', //STATIC TEST
    height: '400px', //STATIC TEST
    backgroundColor: 'rgb(37, 37, 37)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    padding: '15px'        
};

const infoStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

/*********************************/

const profilePictureStyles = {
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

export { cardStyles, infoStyles, profilePictureStyles };