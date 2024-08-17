import { Box, Container } from '@mui/material';
import UserCard from "./components/User/UserCard";
import IncomesExpenses from "./components/IncomeExpense/IncomesExpenses";
import Goal from './components/Goal/Goal';
import Chart from './components/Chart/Chart';

function App() {
    //EXAMPLE FETCHING DATA
    const data = {
        year: 2024,
        data: [1000, 2000, 1500, 3000, 2000, 2500, 3000, 4000, 3500, 2000, 2500, 3000]
    };

    return (
        <Container>
            <Chart content={data}/>
        </Container>
    );
}

export default App;