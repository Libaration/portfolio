import React from 'react';

interface Props {}

const Habbo = (props: Props) => {
  return (
    <div className="habboClient">
      <iframe
        src="https://habbo-html-5-8wdzf.ondigitalocean.app"
        title="client"
      />
    </div>
  );
};

export default Habbo;
