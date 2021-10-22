const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID

const FireBaseInit = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "MotionGallery-intuit.firebaseapp.com",
  databaseURL: "https://MotionGallery-intuit.firebaseio.com",
  projectId: "MotionGallery-intuit",
  storageBucket: "MotionGallery-intuit.appspot.com",
  messagingSenderId: "657829873421",
  appId: FIREBASE_APP_ID
}
export default FireBaseInit
