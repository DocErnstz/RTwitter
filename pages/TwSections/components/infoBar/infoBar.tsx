import React from "react";

const InfoBar: React.FC = () => {
  return (
    <div className="rightbar">
      <div className="searchbar container-row">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="users container-col">
        <h2>Who to follow</h2>
        <div className="container-row">
          <div className="card">
            <img src="images/logos/node.Png" alt="" />
          </div>
          <div className="info">
            <h3>Pixel_Red_cat </h3>
            <p>@Pixelredcat</p>
          </div>
          <div className="btn-outline">Follow</div>
        </div>
        <div className="container-row">
          <div className="card">
            <img src="images/logos/node.Png" alt="" />
          </div>
          <div className="info">
            <h3>Pixel_Red_cat </h3>
            <p>@Pixelredcat</p>
          </div>
          <div className="btn-outline">Follow</div>
        </div>
        <div className="container-row">
          <div className="card">
            <img src="images/logos/node.Png" alt="" />
          </div>
          <div className="info">
            <h3>Pixel_Red_cat </h3>
            <p>@Pixelredcat</p>
          </div>
          <div className="btn-outline">Follow</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
