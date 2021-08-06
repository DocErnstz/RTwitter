import React from "react";
import Link from "next/link";

const OptionsBar: React.FC = (props) => {
  const openForm = (e) => {
    const formTweet = document.getElementById("formTweet");
    formTweet.classList.remove("hide");
  };
  return (
    <div className="leftbar">
      <div className="header"></div>
      <div className="container">
        <div>
          <h1>
            <Link href="/TwSections/main">Home</Link>
          </h1>
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
          <h1>
            <Link href="/TwSections/userMain">Profile</Link>
          </h1>
        </div>
        <div>
          <h1>More</h1>
        </div>
        <div onClick={openForm}>
          <div className="text-button">Tweet</div>
        </div>
      </div>

      <div className="profile">
        <div className="container-row">
          <div className="card">
            <img src="images/logos/node.Png" alt="" />
          </div>

          <div className="info">
            <h3>{props.user.userName}</h3>
            <p>{"@" + props.user.userName + "467"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsBar;
