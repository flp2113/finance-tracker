import UserCard from "./components/User/UserCard";
import { Box, Container } from '@mui/material';
import IncomesExpenses from "./components/IncomeExpense/IncomesExpenses";

function App() {
    return (
        <Container>
            <IncomesExpenses type='expenses'/>
        </Container>
    );
}

export default App;