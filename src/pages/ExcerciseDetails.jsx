import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useGetSingleProductQuery } from '../services/dummyJsonApi';
import { useGetYoutubeQuery } from '../services/youtubeApi';

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  const { data: singleExercise, isFetching: fetchingSingle } =
    useGetSingleProductQuery(id);
  console.log('Single Product Raw:', singleExercise);
  // const { data: youtubeData, isFetching: fetchingYoutube } =
  //   useGetYoutubeQuery('htmlfivedev');
  // console.log('Youtube Raw:', youtubeData);

  useEffect(() => {
    if (singleExercise) {
      setExerciseDetail(singleExercise);
    }
  }, [singleExercise, fetchingSingle, id]);

  if (fetchingSingle) return 'Loading...';

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetails;
