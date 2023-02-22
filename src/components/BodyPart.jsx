import React, { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import { useLazyGetAllWorkoutsQuery } from '../services/gymApi';

import Loader from './Loader';

const BodyPart = ({
  item,
  bodyPart,
  setBodyPart,
  setExercises,
  setCurrentPage,
}) => {
  // console.log('Item:', item);
  // console.log('bodyPart:', bodyPart);
  const [
    getAllData,
    { data: exercisesData, isFetching: isFetchingAllWorkouts },
  ] = useLazyGetAllWorkoutsQuery();

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
      console.log('Exercise Data useEffect:', exercisesData);
    }
  }, [exercisesData]);

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
        if (bodyPart === 'all') {
          getAllData();
          console.log('Filling up all BodyPart');
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
