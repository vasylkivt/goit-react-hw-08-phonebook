const init = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authReducer = (state = init, action) => {
  switch (action.type) {
    case 'auth/register.pen':
      return state;
    case 'auth/register.ful':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case 'auth/register.rej':
      return state;
    case 'auth/login.pen':
      return state;
    case 'auth/login.ful':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case 'auth/login.rej':
      return state;
     case 'auth/logout.pen':
      return state;
    case 'auth/logout.ful':
       return init;
    case 'auth/logout.rej':
      return state;
    default:
      return state;
  }
};
