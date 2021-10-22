import firebase from 'firebase/app'
import 'firebase/auth'

const SignIn = ()=>{
  const auth = firebase.auth()
  const SignInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <main className="SignIn">
      <button onClick={SignInWithGoogle} >Sign in</button>
    </main>
  )
}

export default SignIn
