import { PHOTOS_GET } from '../../api/api';
import createAsyncSlice from '../store/helper/create-async-slice';

const slice = createAsyncSlice({
  name: 'feed',
  initialState: {
    list: [],
    pages: 1,
    infinity: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);

      if (action.payload.length === 0) {
        state.infinity = false;
      }
    },
    addPage(state) {
      state.pages++;
    },
    resetState(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.list = [];
      state.pages = 1;
      state.infinity = true;
    },
  },

  fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export const fetchFeed = slice.asyncAction;
export const { addPhotos, addPage, resetState: resetFeedState } = slice.actions;

export const loadNewPhotos =
  ({ total = 6, user }) =>
  async (dispatch, getState) => {
    const { feed } = getState();

    dispatch(addPage());

    const { payload } = await dispatch(fetchFeed({ page: feed.pages, total, user }));

    dispatch(addPhotos(payload));
  };

export default slice.reducer;
