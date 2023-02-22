import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useGetSingleProductQuery } from '../services/dummyJsonApi';
import { useGetSingleWorkoutQuery } from '../services/gymApi';
import { Audio } from 'react-loader-spinner';

function ExerciseDetails() {
  const { id } = useParams();

  const { data: singleExercise, isFetching: fetchingSingle } =
    useGetSingleWorkoutQuery(id);
  console.log('Single Product Raw:', singleExercise);

  if (fetchingSingle)
    return (
      <Stack
        alignItems={'center'}
        mt='37px'
        justifyContent={'center'}
        p='20px'
        className='search-exercises'
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
    <Box width={'400px'} sx={{ width: { xl: '1488px' } }} m='auto'>
      <Details exerciseDetail={singleExercise} />
      <ExerciseVideos exerciseName={singleExercise.name} />
      <SimilarExercises targetName={singleExercise.target} />
    </Box>
  );
}

export default ExerciseDetails;
