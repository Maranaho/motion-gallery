import { useReducer,useEffect,useState } from 'react'
import MotionGalleryStateContext from './context/MotionGalleryStateContext'
import MotionGalleryDispatchContext from './context/MotionGalleryDispatchContext'
import MotionGalleryReducer, { initialMotionGalleryState } from './reducers/MotionGalleryReducer'
import { auth } from './utils/firebase'
import useAuth from './hooks/useAuth'
import './App.css'

import SignIn from './components/SignIn'
import Gallery from './components/Gallery'
import NonIntuitUser from './components/NonIntuitUser'

const App = ()=>{
  const user = useAuth()
  const [state, dispatch] = useReducer(MotionGalleryReducer, initialMotionGalleryState)
  const { isIntuitEmployee,org } = state

  const getUser =()=>{
    if(user){
      const { displayName,email,photoURL } = user
      const isFam = email.indexOf(org) !== -1
      if(isFam !== isIntuitEmployee) dispatch({type:'IS_FAM',payload:isFam})
      dispatch({type:'USER',payload:{displayName,email,photoURL}})
    } else dispatch({type:'IS_FAM',payload:false})
  }

useEffect(getUser,[user])

  return (
    <MotionGalleryDispatchContext.Provider value={dispatch}>
      <MotionGalleryStateContext.Provider value={state}>

        <main className="motionGallery">
          {user&&!isIntuitEmployee&&<NonIntuitUser/>}
          {user&&isIntuitEmployee?<Gallery/>:<SignIn/>}
        </main>


      </MotionGalleryStateContext.Provider>
    </MotionGalleryDispatchContext.Provider>
  )
}

export default App
