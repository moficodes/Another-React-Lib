import React from "react";

import PropTypes from "prop-types";

import "./Footer.css";

const Footer = (props) => {
  const { children, theme } = props;
  return (
    <div className={`footer ${theme}`}>
      {children}
    </div>
  )
}

Footer.defaultProps = {
  /**
   * Button color. Can be any valid color
   */
  theme: 'light',
}

export default Footer;