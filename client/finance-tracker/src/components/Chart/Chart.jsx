import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

/**
 * Renders a chart component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.content - The content object for the chart, {int year, int data[12]}.
 * @returns {JSX.Element} The rendered chart component.
*/

function Chart({ content }) {
    const options = {
        plugins: {
            title: { display: true, text: `${content.year}`, color: 'rgb(211, 211, 211)' },
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return `$${value}`;
                    },
                    color: 'rgba(211, 211, 211, 0.5)'
                }
            }
        }
    };

    const data = {
        labels: ['January', 'February', 
            'March', 'April', 'May', 
            'June', 'July', 'August', 
            'September', 'October', 
            'November', 'December'],
        datasets: [{
            data: content.data,
            backgroundColor: ['rgb(211, 211, 211)'],
            borderColor: 'rgb(211, 211, 211)', 
        }]
    };

    return (
        <Box sx={{ backgroundColor: 'rgb(37, 37, 37)', borderRadius: '10px', p: '15px' }}>
            <Line options={options} data={data} />
        </Box>
    );
}

Chart.propTypes = {
    content: PropTypes.object.isRequired
};

export default Chart;