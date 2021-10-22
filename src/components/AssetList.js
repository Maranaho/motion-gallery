import { useEffect } from 'react'

import AssetItem from './AssetItem'
import Loading from './Loading'
import useAssets from '../hooks/useAssets'

const AssetList = ()=>{
  const assets = useAssets()
  if(!assets)return <Loading/>
  return (
    <main className="AssetList">
      {Object.keys(assets).map(asset=>
        <AssetItem
          id={asset}
          key={asset}/>
      )}
    </main>
  )
}

export default AssetList
