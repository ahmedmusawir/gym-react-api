import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useGetYoutubeQuery } from '../services/youtubeApi';
import { Audio } from 'react-loader-spinner';

function ExerciseVideos({ exerciseName }) {
  const { data: youtubeData, isFetching } = useGetYoutubeQuery(exerciseName);
  // console.log('Exercise Videos:', youtubeData);

  if (isFetching)
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
          wrapperStyle
          wrapperClass
        />
      </Stack>
    );

  // API DATA IS NOT CONSISTANT. SO HAD TO FILTER OUT THE OTHER STUFF LIKE 'channel' DATA
  const data = youtubeData?.contents;

  const videoData = data.filter((item) => item.video);
  // console.log(videoData);

  return (
    <Box sx={{ mt: { lg: '200px', xs: '50px' } }} p='20px'>
      <Typography
        variant='h4'
        mb={'50px'}
        sx={{ color: 'white', textAlign: 'center' }}
      >
        Watch{' '}
        <span style={{ color: 'yellow', textTransform: 'capitalize' }}>
          {exerciseName}
        </span>{' '}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent={'center'}
        flexWrap='wrap'
        alignItems={'center'}
        sx={{
          flexDirection: { sm: 'row', md: 'row', lg: 'row' },
          gap: { lg: '200px', md: '120px', sm: '120px', xs: '200px' },
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
              <Typography variant='h6' color='#e3e3e3'>
                {item.video.title}
              </Typography>
              <Typography variant='p' color='yellow'>
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
