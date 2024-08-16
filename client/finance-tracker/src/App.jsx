import { Box, Container } from '@mui/material';
import UserCard from "./components/User/UserCard";
import IncomesExpenses from "./components/IncomeExpense/IncomesExpenses";

function App() {
    return (
        <Container>
            <UserCard />
            <IncomesExpenses type="incomes" />
            <IncomesExpenses type="expenses" />
        </Container>
    );
}

export default App;