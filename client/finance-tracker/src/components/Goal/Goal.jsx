import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import { cardStyles, goalTitleStyles } from './styles/GoalStyles.js'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography } from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';

ChartJS.register(ArcElement, Tooltip, Legend); 

/**
 * Renders a Goal component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.content - The content of the goal.
 * @returns {JSX.Element} The rendered Goal component.
*/

function Goal({ content }) {

    const options = {
        plugins: {
            tooltip: {
                enabled: false
            }
        }
    };

    const x = 360 * (content.completed / 100);
    const data = {
        datasets: [{
            data: [x, 360 - x],
            backgroundColor: [
                'rgba(75, 181, 67, 1)',
                'rgba(75, 181, 67, 0.1)',
            ],
            borderColor: [
                'rgba(75, 181, 67, 1)', 
                'rgba(75, 181, 67, 0.1)'
            ],
            borderWidth: 1
        }]
    };

    // GOAL MUST HAVE A DEFINED COST, SO A INITIAL SETUP MUST BE MADE
    // ADD SOME EFFECT WHEN THE GOAL IS COMPLETED
    return (
        <Box sx={cardStyles}>
            <Box sx={goalTitleStyles}>
                <StarsIcon sx={{ fontSize: 20 }} />
                <Typography variant='h6'>{content.goal}</Typography>
            </Box>
            <Typography variant='p'>SET GOAL VALUE</Typography>
            <Box sx={{ width: '50px' }}>
                <Doughnut options={options} data={data} />  
            </Box>
        </Box>
    );
}

Goal.propTypes = {
    content: PropTypes.object.isRequired
};

export default Goal;