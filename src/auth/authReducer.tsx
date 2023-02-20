const initialState = {
  phoneNumber: '',
  userId: '',
};
const authReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  // console.log('Auth reducer>>>', payload);
  switch (type) {
    case 'User_Number':
      return {...state, phoneNumber: payload};
    case 'UserId':
      return {...state, userId: payload};
    default:
      return state;
  }
};

export default authReducer;
