import createAsyncSlice from './helper/create-async-slice';
import { TOKEN_POST } from '../../api/api';

const slice = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: window.localStorage.getItem('token') || null,
    },
  },
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = slice.asyncAction;

export const { resetState: resetTokenState } = slice.actions;

export default slice.reducer;
