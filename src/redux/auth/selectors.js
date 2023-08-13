// const isLoggedIn = useSelector(selectIsLoggedIn)
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// const isRefreshing = useSelector(selectIsRefreshing)
export const selectIsRefreshing = state => state.auth.isRefreshing;

// const user = useSelector(selectUser)
export const selectUser = state => state.auth.user;
