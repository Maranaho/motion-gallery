let initialMotionGalleryState = {
  updateVis:false,
}
const MotionGalleryReducer = (state, action) => {
  switch (action.type) {

    case 'SET_FILEKEY':
      let SET_FILEKEY = {...state}
      SET_FILEKEY.figmaFile= action.payload
    return SET_FILEKEY;


    default: throw new Error('Unexpected action');
  }
}

export default MotionGalleryReducer
export { initialMotionGalleryState }
