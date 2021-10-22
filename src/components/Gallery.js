import firebase from 'firebase/app'
import 'firebase/firestore'
import TopBar from './TopBar'
import AssetList from './AssetList'

const Gallery = ()=>(
  <main className="Gallery">
    <TopBar/>
    <AssetList/>
  </main>
)

export default Gallery
