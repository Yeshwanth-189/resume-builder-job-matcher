import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../store/slices/uiSlices';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // add more reducers here (resume, auth, etc.)
  },
});