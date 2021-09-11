import React from 'react';

interface Props {
  landing: React.RefObject<HTMLElement>;
  details: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
}

export const NavBar = (props: Props) => {
  return (
    <div className="nav">
      <ul>
        Jump to:
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
        <li
          onClick={() => {
            if (props.projects.current) {
              props.projects.current.scrollIntoView();
            }
          }}
        >
          Projects
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
