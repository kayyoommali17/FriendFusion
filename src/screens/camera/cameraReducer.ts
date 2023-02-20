const initialState = {
  cameraData: [],
};
const cameraReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  // console.log('Auth reducer>>>', payload);
  switch (type) {
    case 'cameraData':
      return {...state, phoneNumber: payload};
    default:
      return state;
  }
};

export default cameraReducer;
