const initialState = {
  chatData: [],
};
const chatReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  // console.log('Auth reducer>>>', payload);
  switch (type) {
    case 'chatData':
      return {...state, phoneNumber: payload};
    default:
      return state;
  }
};

export default chatReducer;
