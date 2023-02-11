import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { exercisesData } from '../data/exercisesData';

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
  }, [
    // bodyPartsData,
    exercisesData,
    // isFetchingAllWorkouts,
    // isFetchingBodyParts,
  ]);

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
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Home;
