import React from "react";
import Image from "./Image";
import NoImages from "./NoImages";
const Gallery = (props) => {
  const results = props.data;
  let images;
  let noImages;
  if (results.length > 0) {
    images = results.map((image) => {
      let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
      return <Image url={url} key={image.id} alt={image.title} />;
    });
  } else {
    noImages = <NoImages />;
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;

//https://farm66.staticflickr.com/65535/50822981052_2388336750_m.jpg
