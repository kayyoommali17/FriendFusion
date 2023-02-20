const initialState = {
  profileData: [],
};
const profileRecuer = (state = initialState, action: any) => {
  const {type, payload} = action;
  // console.log('Auth reducer>>>', payload);
  switch (type) {
    case 'UserData':
      return {...state, phoneNumber: payload};
    default:
      return state;
  }
};

export default profileRecuer;
