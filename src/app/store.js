import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import questionReducer from '../features/questionSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});

export default store;
