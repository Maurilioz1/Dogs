import createAsyncSlice from './helper/create-async-slice';
import { TOKEN_POST } from '../../api/api';

const slice = createAsyncSlice({
  name: 'token',
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = slice.asyncAction;

export default slice.reducer;
