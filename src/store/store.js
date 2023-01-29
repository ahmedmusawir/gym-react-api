import { configureStore } from '@reduxjs/toolkit';
import { gymApi } from '../services/gymApi';
import { youtubeApi } from '../services/youtubeApi';
import { dummyJsonApi } from '../services/dummyJsonApi';

export default configureStore({
  reducer: {
    [gymApi.reducerPath]: gymApi.reducer,
    [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      gymApi.middleware,
      dummyJsonApi.middleware,
      youtubeApi.middleware,
    ]),
});
