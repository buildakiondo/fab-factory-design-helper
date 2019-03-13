import PropTypes from 'prop-types';
import React from 'react';

function Content({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
