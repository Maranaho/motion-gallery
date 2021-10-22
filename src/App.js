import { useContext,useEffect,useState } from 'react'
import FireBaseInit from './Utils/FireBaseInit'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import MotionGalleryStateContext from './context/MotionGalleryStateContext'
import MotionGalleryDispatchContext from './context/MotionGalleryDispatchContext'
import './App.css'

const auth = firebase.auth()
const firestore = firebase.firestore()

const App = ()=>{
  const [user] = useAuthState(auth)
  const dispatch = useContext(MotionGalleryDispatchContext)
  const { figmaData,figmaFile,loading,token,me } = useContext(MotionGalleryStateContext)
  const galleryDB = firestore.collection('motion-gallery')
  const [assetsCollection] = useCollectionData(galleryDB,{idField:'id'})


    useEffect(()=>firebase.initializeApp(FireBaseInit),[])
  return (
    <main className="motionGallery">
      <TopBar/>
      {user?<SignIn/>:<Gallery/>}
    </main>
  )
}

export default App
