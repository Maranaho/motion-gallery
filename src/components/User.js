import { useContext } from 'react'
import MotionGalleryStateContext from '../context/MotionGalleryStateContext'

const User = ()=>{
  const { user } = useContext(MotionGalleryStateContext)
  const { displayName,email,photoURL } = user
  return (
    <main className="User">
      {displayName}
      <img src={photoURL} alt={displayName} width="40"/>
    </main>
  )
}

export default User
