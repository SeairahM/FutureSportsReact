import React, { useEffect } from 'react';
import './media.css';
import movie from '../assets/video/rowingvid.mp4'

const Media = () => {
  useEffect(() => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

  }, []);

  return (
    <div className="mediazone">
      <div className="vid">
        <video controls width="100%" height="">
          <source src={movie} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </div>

      <div className="fb">
        <div
          className="fb-post"
          data-href="https://www.facebook.com/RowingVictoria/posts/pfbid0aqVa5AdRzAV8GVc1pBkRRwb4zbqMs7rx6YgFiAqyfx7B8F4PUfKHm5h5JgePz1b3l"
          data-width="100%"
          data-show-text="true"
        >
          {/* The Facebook post will be rendered here */}
          <blockquote
            cite="https://www.facebook.com/RowingVictoria/posts/762981982499612"
            className="fb-xfbml-parse-ignore"
          >
            <p>
              Looking back ⏪ at the amazing performances of our U23, U21, &amp;
              U19 representatives at international level! 🌍 🥇U23W4+...
            </p>
            Posted by
            <a href="https://www.facebook.com/RowingVictoria">
              Rowing Victoria
            </a>{" "}
            on&nbsp;
            <a href="https://www.facebook.com/RowingVictoria/posts/762981982499612">
              Thursday, August 17, 2023
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Media;
