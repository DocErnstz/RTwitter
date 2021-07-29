import React from "react";

const OptionsBar: React.FC = () => {
  return (
    <div class="leftbar">
      <div className="header"></div>
      <div className="container">
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h1>Explore</h1>
        </div>
        <div>
          <h1>Notification</h1>
        </div>
        <div>
          <h1>Messages</h1>
        </div>
        <div>
          <h1>Bookmarks</h1>
        </div>
        <div>
          <h1>Lists</h1>
        </div>
        <div>
          <h1>Profile</h1>
        </div>
        <div>
          <h1>More</h1>
        </div>
        <div>
          <div class="text-button">Tweet</div>
        </div>
      </div>

      <div className="profile">
        <div className="container-row">
          <div class="card">
            <img src="images/logos/node.Png" alt="" />
          </div>

          <div className="info">
            <h3>Exukasu</h3>
            <p>@ernesto14568243</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsBar;
