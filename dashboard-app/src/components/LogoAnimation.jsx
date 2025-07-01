import React from 'react';
import './LogoAnimation.css';

const LogoAnimation = () => {
  return (
    <div className="logo-body">
      <div className="logo-container">
        <img
          src="/images/text_only_xworkz.png"
          alt="Animated Text"
          className="text-overlay"
        />
      </div>
    </div>
  );
};

export default LogoAnimation;
