import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const onEditPost = createAsyncThunk( // modern realization
  'post/editPost',
  async (actions, thunkAPI) => {
      console.log(actions)
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
          "id": actions.params.id,
          "content": actions.text
      });

      const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };

      try {
          const response = await fetch("http://localhost:7777/posts", requestOptions)
          await response.text()
          actions.navigate('/')
      } catch (er) {
          console.log(er)
      }
  }
)


const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload
        },
    },
    extraReducers: (builder) => { // modern realization
      builder.addCase(onEditPost.fulfilled, (state,action) => {
        console.log("fulfilled", action)
      })
      builder.addCase(onEditPost.pending, (state,action) => {
        console.log("pending", action)
      })
    }
})


export const fetchPostsThunk = () => async (dispatch) => { // Classic realization
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    const response = await fetch("http://localhost:7777/posts", requestOptions)
    const result = await response.json()
    dispatch(postSlice.actions.getPosts(result))
}

export default postSlice.reducer
export const {getPosts} = postSlice.actions

