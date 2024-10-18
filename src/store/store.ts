import { createStore } from 'redux';
import rootReducer from "./reducers";
import { setLocalStorage } from '../utils/localStorage';

const store = createStore(rootReducer);

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
})

export { store };

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
