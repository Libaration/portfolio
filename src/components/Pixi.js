import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

export default function Pixi() {
  const ref = useRef(null);
  useEffect(() => {
    let app = new PIXI.Application({
      width: 1000,
      height: 667,
    });
    ref.current.appendChild(app.view);
    let img = new PIXI.Sprite.from(`${process.env.PUBLIC_URL}/header.jpg`);

    img.height = 667;
    img.x = 0;
    img.y = -240;
    app.stage.addChild(img);
    let depthMap = new PIXI.Sprite.from(
      `${process.env.PUBLIC_URL}/depthmap.jpg`
    );
    app.stage.addChild(depthMap);
    let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];
    window.onmousemove = function (e) {
      displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 40;
      displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 40;
    };
    return () => {
      // On unload completely destroy the application and all of it's children
      app.destroy(true, true);
    };
  }, []);

  return <div ref={ref} />;
}
