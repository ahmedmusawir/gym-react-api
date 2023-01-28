import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import {
  useGetAllWorkoutsQuery,
  useGetGymCategoriesQuery,
} from '../services/gymApi';
import { exercisesData } from '../data/exercisesData';
import { bodyPartsData } from '../data/bodyPartsData';

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);

  // THE FOLLOWING WORKS. ONLY USGING STATIC DATA DUE TO API HARD LIMITS

  // const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
  //   useGetAllWorkoutsQuery();
  // const { data: bodyPartsData, isFetching: isFetchingBodyParts } =
  //   useGetGymCategoriesQuery();

  // console.log('Exercise Local Data', exerciseData);
  // console.log('Exercise Categories Local Data', bodyPartsData);

  useEffect(() => {
    setExercises(exercisesData);
    // THE FOLLOWING WON'T WORK CUZ CANNOT USE SPREAD OPERATOR HERE, THE DATA IS NOT YET AVAILABLE
    // setBodyParts(['all', ...bodyPartsData]);
    setBodyParts(['all'].concat(bodyPartsData));
  }, [exercisesData, bodyPartsData]);

  // if (isFetchingAllWorkouts || isFetchingBodyParts) return 'Loading...';

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        exercises={exercises}
        setExercises={setExercises}
        bodyParts={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
}

export default Home;
