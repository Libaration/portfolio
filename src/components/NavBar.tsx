import React from 'react';

interface Props {
  landing: React.RefObject<HTMLElement>;
  details: React.RefObject<HTMLElement>;
}

export const NavBar = (props: Props) => {
  return (
    <div className="nav">
      <ul>
        <li
          onClick={() => {
            if (props.landing.current) {
              props.landing.current.scrollIntoView();
            }
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            if (props.details.current) {
              props.details.current.scrollIntoView();
            }
          }}
        >
          About
        </li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default NavBar;
