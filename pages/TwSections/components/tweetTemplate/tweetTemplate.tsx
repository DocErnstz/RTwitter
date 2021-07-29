import React from "react";

const Post = () => {
  return (
    <div class="post">
      <div className="id">
        <div className="card"></div>
      </div>
      <div className="content">
        <div className="info">
          <h3>Daniel Vasallo</h3>
          <p>@danielva . Jun 14</p>
        </div>
        <div className="comment">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fugit reprehenderit natus reiciendis eligendi nostrum nulla sit
          provident autem totam doloribus, molestias quibusdam perferendis at
          nobis officiis inventore quod tempore. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus fugit reprehenderit natus
          reiciendis eligendi nostrum nulla sit provident autem totam doloribus,
          molestias quibusdam perferendis at nobis officiis inventore quod
          tempore.
        </div>
        <div className="actions">
          <div className="action">
            <div className="card"></div>
            <p>99</p>
          </div>
          <div className="action">
            <div className="card"></div>
            <p>99</p>
          </div>
          <div className="action">
            <div className="card"></div>
            <p>99</p>
          </div>
          <div className="action">
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
