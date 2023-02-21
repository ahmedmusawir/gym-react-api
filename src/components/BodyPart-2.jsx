import React, { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import {
  useLazyGetAllWorkoutsQuery,
  useLazyGetWorkoutByBodyPartQuery,
} from '../services/gymApi';

const BodyPart = ({
  item,
  bodyPart,
  setBodyPart,
  setExercises,
  setCurrentPage,
  setIsLoading,
}) => {
  // console.log('Item:', item);
  // console.log('bodyPart:', bodyPart);
  const [
    getAllData,
    { data: exercisesData, isFetching: isFetchingAllWorkouts },
  ] = useLazyGetAllWorkoutsQuery();

  const [
    getDataByBodyPart,
    { data: exercisesDataByCategory, isFetching: isFetchingByCategory },
  ] = useLazyGetWorkoutByBodyPartQuery();

  useEffect(() => {
    if (exercisesData && exercisesDataByCategory) {
      if (bodyPart === 'all') {
        setExercises(exercisesData);
        setCurrentPage(1);
      } else {
        setExercises(exercisesDataByCategory);
        setCurrentPage(1);
      }
    }
  }, [
    bodyPart,
    exercisesData,
    exercisesDataByCategory,
    isFetchingAllWorkouts,
    isFetchingByCategory,
  ]);

  if (isFetchingAllWorkouts || isFetchingByCategory) return 'Loading...';
  // if (isFetchingAllWorkouts || isFetchingByCategory) return setIsLoading(true);

  console.log('Data By Part:', exercisesDataByCategory);

  return (
    <Stack
      type='button'
      alignItems={'center'}
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',

        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '260px',
        height: '260px',
        cursor: 'pointer',
        gap: '25px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        console.log('BodyPart.jsx:', bodyPart);
        if (item === 'all') {
          getAllData();
        } else {
          getDataByBodyPart(item);
        }
      }}
    >
      <img
        src={Icon}
        alt='dumbbell'
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize={'22px'}
        fontWeight='bold'
        color={'#3A1212'}
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
