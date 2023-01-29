import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { useGetGymCategoriesQuery } from './services/gymApi';
import { useGetAllWorkoutsQuery } from './services/gymApi';
import { useGetYoutubeQuery } from './services/youtubeApi';
import { useGetSingleWorkoutQuery } from './services/gymApi';
import { useGetTargetWorkoutQuery } from './services/gymApi';
import { useGetEquipmentWorkoutQuery } from './services/gymApi';
import './App.scss';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExcerciseDetails from './pages/ExcerciseDetails';

function App() {
  // const { data, isFetching } = useGetGymCategoriesQuery();
  // console.log(data);
  // const { data, isFetching } = useGetYoutubeQuery('morning joe');
  // console.log(data?.contents);
  // const { data, isFetching } = useGetAllWorkoutsQuery();
  // console.log(data);
  // const { data, isFetching } = useGetSingleWorkoutQuery('0001');
  // console.log(data);
  // const { data, isFetching } = useGetTargetWorkoutQuery('abs');
  // console.log(data);
  // const { data, isFetching } = useGetEquipmentWorkoutQuery('cable');
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
