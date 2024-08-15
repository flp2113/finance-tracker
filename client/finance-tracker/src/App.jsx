import UserCard from "./components/User/UserCard";
import Incomes from "./components/IncomeExpense/Incomes";
import Expenses from "./components/IncomeExpense/Expenses";
import { Box, Container } from '@mui/material';

function App() {
    return (
        <Container>
            <UserCard></UserCard>
            <Box>
                <Incomes />
                <Expenses />
            </Box>
        </Container>
    );
}

export default App;
