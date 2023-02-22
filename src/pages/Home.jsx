import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useGetAllWorkoutsQuery } from '../services/gymApi';
import { Audio } from 'react-loader-spinner';

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
    useGetAllWorkoutsQuery();

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
  }, []);

  if (isFetchingAllWorkouts)
    return (
      <Stack
        alignItems={'center'}
        mt='37px'
        justifyContent={'center'}
        p='20px'
        className=''
        maxWidth={'xl'}
      >
        <Audio
          height='80'
          width='80'
          radius='9'
          color='yellow'
          ariaLabel='loading'
        />
      </Stack>
    );

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
        setIsLoading={setIsLoading}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Box>
  );
}

export default Home;
