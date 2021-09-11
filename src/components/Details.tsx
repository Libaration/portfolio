import React, { forwardRef } from 'react';

interface Props {}

const Details = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className="details" ref={ref}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec
      ultrices tincidunt arcu non. Pharetra massa massa ultricies mi quis
      hendrerit. Platea dictumst vestibulum rhoncus est pellentesque elit. Arcu
      non odio euismod lacinia. Arcu vitae elementum curabitur vitae nunc sed
      velit dignissim. Tortor pretium viverra suspendisse potenti nullam ac. Ut
      consequat semper viverra nam libero justo laoreet sit. Tristique senectus
      et netus et malesuada fames ac turpis egestas. A pellentesque sit amet
      porttitor eget dolor morbi non arcu. Lectus urna duis convallis convallis
      tellus. Tortor pretium viverra suspendisse potenti nullam ac. Ultrices
      eros in cursus turpis massa tincidunt dui. Dictum varius duis at
      consectetur lorem donec massa sapien faucibus. Dui sapien eget mi proin
      sed libero enim. At erat pellentesque adipiscing commodo elit at imperdiet
      dui. Gravida in
    </div>
  );
});
export default Details;
