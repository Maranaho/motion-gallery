import { useState,useEffect } from 'react'
import { firestore } from '../utils/firebase'

const useAssets = ()=>{
  const [assets,setAssets] = useState(null)
  
  const listenToAssetDB = ()=> {
    firestore
    .collection('motion-gallery-assets')
    .onSnapshot(snap=>{
      const dbAssets = snap.docs.length?snap.docs.reduce((acc,doc)=>{
        acc[doc.id] = {...doc.data()}
        return acc
      },{}):null
      setAssets(dbAssets)
    })
  }

  useEffect(()=>{
    const unSub = listenToAssetDB()
    return unSub
  },[])


  return assets
}

export default useAssets
