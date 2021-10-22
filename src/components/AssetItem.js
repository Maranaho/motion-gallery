import useAssets from '../hooks/useAssets'

const AssetItem = ({id})=>{

  const assets = useAssets()
  if(!assets)return null
  const { name,url } = assets[id]

  return (
    <article className="AssetItem">
      {name}
      <img src={url} height="100" width="100" alt={name}/>
      <a href={url} target="_blank" rel="noopener noreferrer" download>Download</a>
    </article>
  )
}

export default AssetItem
