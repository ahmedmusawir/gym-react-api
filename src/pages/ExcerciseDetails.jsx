import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useGetSingleProductQuery } from '../services/dummyJsonApi';

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  const { data: singleExercise, isFetching: fetchingSingle } =
    useGetSingleProductQuery(id);
  console.log('Single Product Raw:', singleExercise);

  useEffect(() => {
    if (singleExercise) {
      setExerciseDetail(singleExercise);
    }
  }, [singleExercise, fetchingSingle, id]);

  if (fetchingSingle) return 'Loading...';

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseName={exerciseDetail.category} />
      <SimilarExercises targetName={exerciseDetail.category} />
    </Box>
  );
}

export default ExerciseDetails;
