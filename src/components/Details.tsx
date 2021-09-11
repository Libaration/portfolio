import React, { forwardRef } from 'react';
import Habbo from '../components/Habbo';

interface Props {}

const Details = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <>
      <div className="details" ref={ref}>
        <Habbo />
        <div className="detailsParagraph">
          <h1> It all began here!</h1>
          <p>
            My love for coding began in 5th grade. I wanted virtual currency for
            an online game {'(Recreation shown left screen)'}. When my parents
            refused I googled relentlessly trying to find how to get this
            currency for free. Unfortunately, all I got from that was viruses!
            Through trial and error however, I was lead to online communities
            who modded the game through HEX editing and packet sniffing/logging!
            I began learning Visual Basic 6 and contributing basic
            {'(no pun intended)'}
            applications which lead to learning HTML and PHP to have a place to
            host my applications!
            <br />I recently attended Flatiron and completed the Full Stack
            developer program where my attention switched from Desktop to Web
            and am enjoying it just as much as desktop development! I love
            problem solving and creating projects to gain a deeper understanding
            in whatever I create.
          </p>
        </div>
      </div>
    </>
  );
});
export default Details;
