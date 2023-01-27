import { configureStore } from '@reduxjs/toolkit';
import { gymApi } from '../services/gymApi';
import { youtubeApi } from '../services/youtubeApi';

export default configureStore({
  reducer: {
    [gymApi.reducerPath]: gymApi.reducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([gymApi.middleware, youtubeApi.middleware]),
});
