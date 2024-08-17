import { Box, Container } from '@mui/material';
import UserCard from "./components/User/UserCard";
import IncomesExpenses from "./components/IncomeExpense/IncomesExpenses";
import Goal from './components/Goal/Goal';
import Chart from './components/Chart/Chart'; 

function App() {
    return (
        <Container>
            <UserCard name='Felipe' info={{ bank: 1000, wallet: 69, savings: 5700 }}/>
            <IncomesExpenses type='incomes' />
            <IncomesExpenses type='expenses' />
        </Container>
    );
}

export default App;