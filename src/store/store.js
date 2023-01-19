import { configureStore } from '@reduxjs/toolkit';
import { gymApi } from '../services/gymApi';

export default configureStore({
  reducer: {
    [gymApi.reducerPath]: gymApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([gymApi.middleware]),
});
