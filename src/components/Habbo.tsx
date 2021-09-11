import React from 'react';

interface Props {}

const Habbo = (props: Props) => {
  return (
    <div className="project">
      <div className="habboClient">
        <iframe
          className="clientIframe"
          src="https://habbo-html-5-zvos9.ondigitalocean.app/"
          title="client"
          scrolling="no"
        />
      </div>
      <div className="projectDescription">
        <b>Project:</b> HabboHTML5
        <br />
        <b>Language:</b> Vanilla JS
        <br />
        <b>Objective:</b> Recreate childhood game originally coded in
        Shockwave/Flash to HTML5 and JS
        <br />
        <b>Tech:</b> Uses Phaser3 library for rendering canvas / game sprites
        and Tiled to create Tilemaps and textures. Implements EasyStar package
        for pathfinding
        <br />
        <a href="https://github.com/Libaration/HabboHTML5">
          <b>GitHub Source</b>
        </a>
      </div>
    </div>
  );
};

export default Habbo;
