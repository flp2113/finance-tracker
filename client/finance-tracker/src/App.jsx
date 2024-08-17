import { Box, Container } from '@mui/material';
import UserCard from "./components/User/UserCard";
import IncomesExpenses from "./components/IncomeExpense/IncomesExpenses";
import Goal from './components/Goal/Goal';

function App() {
    //EXAMPLE FETCHING DATA
    const data = [
        {id: 0, goal: 'Joggers', completed: 60},
        {id: 1, goal: 'Jeej', completed: 55},
        {id: 2, goal: 'Poggers', completed: 20}
    ];

    return (
        <Container>
            <UserCard />
            <IncomesExpenses type='incomes'/>
            <IncomesExpenses type='expenses'/>
            {data.map(d => <Goal key={d.id} content={{...d}} />)}
        </Container>
    );
}

export default App;