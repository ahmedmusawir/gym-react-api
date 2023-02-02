import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useGetSingleProductQuery } from '../services/dummyJsonApi';
import { useGetSingleWorkoutQuery } from '../services/gymApi';
import Loader from '../components/Loader';

function ExerciseDetails() {
  const { id } = useParams();

  const { data: singleExercise, isFetching: fetchingSingle } =
    useGetSingleWorkoutQuery(id);
  console.log('Single Product Raw:', singleExercise);

  if (fetchingSingle) return <Loader />;

  return (
    <Box>
      <Details exerciseDetail={singleExercise} />
      <ExerciseVideos exerciseName={singleExercise.name} />
      <SimilarExercises targetName={singleExercise.target} />
    </Box>
  );
}

export default ExerciseDetails;
