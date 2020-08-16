import React from 'react';
import './style.css';
import ImageCard from '../ImageCard';

const ImageList = ({images}) => {
  const imagesList = images.map(({id, urls, description})=> {
    return (
      <ImageCard key={id} description={description} urls={urls}/>
    )
  })

return <div className="image-list">{imagesList}</div>
}

export default ImageList;