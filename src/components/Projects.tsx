import React, { forwardRef } from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import feeddesigner1 from '../assets/images/feeddesigner1.jpg';
import feeddesigner2 from '../assets/images/feeddesigner2.jpg';
//@ts-ignore
import Fade from 'react-reveal/Fade';
interface Props {}
const Projects = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <>
      <div className="custom-shape-divider-bottom-1631349158">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="projects" ref={ref}>
        <Fade right>
          <h1>Projects</h1>
          <div className="slider">
            <Carousel
              plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ]}
            >
              <img
                src="https://camo.githubusercontent.com/309344e0f43d8d2b23a8d212588fb960722277bde9dbee17ef9d7967becfaab8/68747470733a2f2f692e6779617a6f2e636f6d2f38386135373064333033383536613939643939373663363234393334393361352e6a7067"
                alt="website screenshot"
              />
              <img
                src="https://camo.githubusercontent.com/9db0a48d66cc4e6274d9c90636da5a5ac5e6dd5958fc4a7332ddc0b42c6af2c5/68747470733a2f2f692e6779617a6f2e636f6d2f36643037353231343931633762346532666565363930653332336163326465322e706e67"
                alt="website screenshot"
              />
              <img
                src="https://camo.githubusercontent.com/e8acc8e90cfc67e054d29ab10c86d7a2787be5b8d5bc2fb9cd1b79ef6079c464/68747470733a2f2f692e6779617a6f2e636f6d2f33343166313831663036333962396432373031393637303436313762306535642e706e67"
                alt="website screenshot"
              />
              <img
                src="https://camo.githubusercontent.com/377921014a552103d517e8c64a01546c39aef7549347cac28042b667fef13a79/68747470733a2f2f692e6779617a6f2e636f6d2f39313731326236613931306435653931616565653963386433656430313038302e706e67"
                alt="website screenshot"
              />
              <img
                src="https://camo.githubusercontent.com/35137edf63ab7a45b808d5fb87bb469d27bd3f244377a255829fdc37346544f6/68747470733a2f2f692e6779617a6f2e636f6d2f39393063333162616639353733396432316631643735326462303433613033342e706e67"
                alt="website screenshot"
              />
              <img
                src="https://camo.githubusercontent.com/a28559d5b8f35b252c5246a71f83985d7eed485229b2228ec404b2500319c8d4/68747470733a2f2f692e6779617a6f2e636f6d2f63623635353563383838383138383632323338333264633631653363376266662e6a7067"
                alt="website screenshot"
              />
            </Carousel>
            <div className="sliderDescription">
              <p>
                <b>Project: </b>EstateAuction
                <br />
                <b>Languages: </b>Typescript, React, Ruby, Rails
                <br />
                <b>Objectives: </b>Create a modern Real Estate auction website
                for consumers to list and sell their homes
                <br />
                <b>Tech: </b>
                <ul>
                  <li>
                    Utilizes 3rd party API's from Google Maps and Stripe to show
                    home locations and place bids.
                  </li>
                  <li>
                    Uses JSON Web Tokens and localStorage to store encrypted
                    user information client side.
                  </li>
                  <li>
                    Leverages Redux and Thunk middleware to asynchronously
                    retrieve data from the Rails backend API that powers
                    listings/auctions
                  </li>
                  <a href="https://github.com/Libaration/Estate-Auction">
                    <b>GitHub Source</b>
                  </a>
                </ul>
              </p>
            </div>
          </div>

          <div className="slider">
            <Carousel
              plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ]}
            >
              <img src={feeddesigner1} alt="website screenshot" />
              <img src={feeddesigner2} alt="website screenshot" />
            </Carousel>
            <div className="sliderDescription">
              <p>
                <b>Project: </b>Feed Designer
                <br />
                <b>Languages: </b>Vanilla Javascript, Ruby, Rails
                <br />
                <b>Objectives: </b>Create a web app that allows
                users/influencers to pre-plan their instagram feed for a more
                cohesive page design/theme.
                <br />
                <b>Tech: </b>
                <ul>
                  <li>
                    Scrapes user photos using Nokogiri gem and saves them to
                    Rails Backend API.
                  </li>
                  <li>
                    Makes use of 3rd party API's to allow drag and drop
                    functionally when designing/reordering photos.
                  </li>
                  <li>
                    Fetches User information from Rails API to display in DOM.
                  </li>
                  <a href="https://github.com/Libaration/feed-designer">
                    <b>GitHub Source</b>
                  </a>
                </ul>
              </p>
            </div>
          </div>

          <div className="slider">
            <Carousel plugins={['centered', 'infinite']}>
              <img
                src="https://user-images.githubusercontent.com/11550216/110198457-9f347300-7e20-11eb-971c-adaea6d2e3c6.gif"
                alt="website screenshot"
              />
              <img
                src="https://user-images.githubusercontent.com/11550216/110198457-9f347300-7e20-11eb-971c-adaea6d2e3c6.gif"
                alt="website screenshot"
              />
            </Carousel>
            <div className="sliderDescription">
              <p>
                <b>Project: </b>Flavor of the Week
                <br />
                <b>Languages: </b>Ruby, Rails
                <br />
                <b>Objectives: </b>Create a social music Rails application that
                uses Spotify API to allow users to share their current favorite
                song that week. Users can repost others flavors/songs as well as
                comment and post their own.
                <br />
                <b>Tech: </b>
                <ul>
                  <li>
                    Utilizes OAuth authentication to allow users to login via
                    Spotify
                  </li>
                  <li>
                    Uses 3rd party API's to load dynamic video background and
                    play song on hover.
                  </li>
                  <li>
                    Logins are maintained via session cookies on backend after
                    authorization.
                  </li>
                  <a href="https://github.com/Libaration/flavoroftheweek">
                    <b>GitHub Source</b>
                  </a>
                </ul>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
});

export default Projects;
