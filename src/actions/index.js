import jsonplaceholder from '../apis/jsonPlaceHolder';

export const fecthPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    const userIds = getState().posts.map(post => post.userId);
    const uniqueIds = [... new Set(userIds)];
    console.log(uniqueIds);
    uniqueIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}


