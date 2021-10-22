import firebase from 'firebase/app'
import 'firebase/auth'

const SignOut = ()=>{
  const auth = firebase.auth()
  return (
    <main className="SignOut">
      <button onClick={()=>auth.signOut()} >Sign out</button>
    </main>
  )
}

export default SignOut
