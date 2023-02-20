const initialState = {
  homeData: [],
};
const homeReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  // console.log('Auth reducer>>>', payload);
  switch (type) {
    case 'homeData':
      return {...state, phoneNumber: payload};
    default:
      return state;
  }
};

export default homeReducer;
