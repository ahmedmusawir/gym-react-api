import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
} from '../services/dummyJsonApi';
import { bodyPartsData } from '../data/bodyPartsData';
import { exercisesData } from '../data/exercisesData';
import Loader from './Loader';

const SearchExercises = ({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // THE FOLLOWING WORKS. ONLY USGING STATIC DATA DUE TO API HARD LIMITS

  // const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
  //   useGetAllProductsQuery();
  // console.log('Raw data from API - Exercises:', exercisesData);

  // const { data: bodyPartsData, isFetching: isFetchingBodyParts } =
  //   useGetProductCategoriesQuery();
  // console.log('Raw data from API - Body Parts:', bodyPartsData);

  // console.log('Exercise Local Data', exerciseData);
  // console.log('Exercise Categories Local Data', bodyPartsData);

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
    if (bodyPartsData) {
      // setBodyParts(['all'].concat(bodyPartsData));
      setBodyParts(['all', ...bodyPartsData]);
    }
  }, [
    bodyPartsData,
    exercisesData,
    // isFetchingAllWorkouts,
    // isFetchingBodyParts,
  ]);

  const handleSearch = () => {
    if (search) {
      // THIS MUST BE exercisesData CUZ exercises IS A STATE AND IT'S BEING UPDATED
      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase())
      );

      setSearch('');
      setExercises(searchExercises);
      // console.log('Filtered Search result:', searchExercises);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }
  };

  // if (isFetchingBodyParts) return 'Loading...';
  // if (isFetchingAllWorkouts || isFetchingBodyParts) return 'Loading...';
  if (!exercisesData) return <Loader />;

  return (
    <div className='search-container'>
      <Box width={'400px'} sx={{ width: { xl: '1488px' } }} m='auto'>
        <Stack
          alignItems={'center'}
          mt='37px'
          justifyContent={'center'}
          p='20px'
          className='search-exercises'
          maxWidth={'xl'}
        >
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { lg: '44px', xs: '30px' },
              color: '#e3e3e3',
              paddingTop: '4rem',
            }}
            mb='50px'
            textAlign={'center'}
          >
            Awesome Exercises You Should Know
          </Typography>
          <Box
            position={'relative'}
            mb='72px'
            display='flex'
            className='search-box'
          >
            <TextField
              sx={{
                input: {
                  fontWeight: '700',
                  border: '0px solid black',
                  borderRadius: '4px',
                },
                width: { lg: '800px', xs: '250px' },
                backgroundColor: 'fff',
              }}
              height='76px'
              value={search}
              placeholder='Search Exercises'
              type={'text'}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <Button
              className='search-btn'
              sx={{
                backgroundColor: '#ff2625',
                color: '#fff',
                textTransform: 'none',
                width: { lg: '175px', xs: '80px' },
                fontSize: { lg: '20px', xs: '14px' },
                height: '56px',
                // position: 'absolute',
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
          <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar
              data={bodyParts}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              isBodyPart
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default SearchExercises;
