import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { useGetGymCategoriesQuery } from './services/gymApi';
import './App.scss';

import Home from './pages/Home';
import ExcerciseDetails from './pages/ExcerciseDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // const { data, isFetching } = useGetGymCategoriesQuery();
  // console.log(data);

  return (
    <Box width={'400px'} sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExcerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
