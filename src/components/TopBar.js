import { useContext } from 'react'
import MotionGalleryStateContext from '../context/MotionGalleryStateContext'
import MotionGalleryDispatchContext from '../context/MotionGalleryDispatchContext'

import SignOut from './SignOut'
import User from './User'

const TopBar = ()=>{
  return (
    <main className="TopBar">
      <User/>
      <SignOut/>
    </main>
  )
}

export default TopBar
