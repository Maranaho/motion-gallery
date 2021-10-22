let initialMotionGalleryState = {
  isIntuitEmployee:false,
}
const MotionGalleryReducer = (state, action) => {
  switch (action.type) {

    case 'IS_FAM':
      let IS_FAM = {...state}
      IS_FAM.isIntuitEmployee= action.payload
    return IS_FAM;


    default: throw new Error('Unexpected action');
  }
}

export default MotionGalleryReducer
export { initialMotionGalleryState }
