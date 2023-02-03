import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.scss';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExcerciseDetails from './pages/ExcerciseDetails';

function App() {
  return (
    <>
      <Navbar />
      {/* <Box width={'400px'} sx={{ width: { xl: '1488px' } }} m='auto'> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExcerciseDetails />} />
      </Routes>
      <Footer />
      {/* </Box> */}
    </>
  );
}

export default App;
