import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useGetYoutubeQuery } from '../services/youtubeApi';
import Loader from './Loader';

function ExerciseVideos({ exerciseName }) {
  const { data: youtubeData, isFetching } = useGetYoutubeQuery(exerciseName);
  // console.log('Exercise Videos:', youtubeData);

  if (isFetching) return <Loader />;

  // API DATA IS NOT CONSISTANT. SO HAD TO FILTER OUT THE OTHER STUFF LIKE 'channel' DATA
  const data = youtubeData?.contents;

  const videoData = data.filter((item) => item.video);
  // console.log(videoData);

  return (
    <Box sx={{ mt: { lg: '200px', xs: '50px' } }} p='20px'>
      <Typography variant='h4' mb={'33px'}>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {exerciseName}
        </span>{' '}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent={'flex-start'}
        flexWrap='wrap'
        alignItems={'center'}
        sx={{
          flexDirection: { sm: 'row', md: 'row', lg: 'row' },
          gap: { lg: '70px', md: '170px', sm: '70px', xs: '200px' },
        }}
      >
        {videoData?.slice(0, 3).map((item, indx) => (
          <a
            href={`https://youtube.com/watch?v=${item.video.videoId}`}
            key={indx}
            className='exercise-video'
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color='black'>
                {item.video.title}
              </Typography>
              <Typography variant='p' color='gray'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
