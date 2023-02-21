import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useGetAllWorkoutsQuery } from '../services/gymApi';

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
    useGetAllWorkoutsQuery();

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
  }, []);

  return (
    <Box>
      <Box width={'400px'} sx={{ width: { xl: '1488px' } }} m='auto'>
        <HeroBanner />
      </Box>
      <SearchExercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        className='search-exercises'
        setCurrentPage={setCurrentPage}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
}

export default Home;
