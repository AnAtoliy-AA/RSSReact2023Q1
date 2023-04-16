import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { searchValueApi } from '@services/api/searchService';
import searchReducer from './slices/searchSlice/searchSlice';
import formReducer from './slices/formSlice/formSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
    [searchValueApi?.reducerPath]: searchValueApi?.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchValueApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
