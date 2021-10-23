let initialMotionGalleryState = {
  isIntuitEmployee:false,
  org:'@intuit.com',
  user:null,
}
const MotionGalleryReducer = (state, action) => {
  switch (action.type) {

    case 'USER':
      let USER = {...state}
      USER.user = action.payload
    return USER;

    case 'IS_FAM':
      let IS_FAM = {...state}
      IS_FAM.isIntuitEmployee= action.payload
    return IS_FAM;

    default: throw new Error('Unexpected action');
  }
}

export default MotionGalleryReducer
export { initialMotionGalleryState }
