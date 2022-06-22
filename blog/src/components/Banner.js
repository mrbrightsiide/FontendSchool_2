import React from "react";
import "../css/banner.css";

function Banner({ data }) {
  // console.log(data);
  return (
    <div className='banner'>
      <div className='max-width'>
        <div className='banner-contents'>
          <p className='sub-text'>{data.subTitle}</p>
          <p className='main-text'>{data.mainTitle}</p>
          <p className='description'>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
