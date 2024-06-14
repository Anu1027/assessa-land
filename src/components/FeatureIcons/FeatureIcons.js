// FeatureIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcon1, faIcon2, faIcon3 } from '@fortawesome/free-solid-svg-icons'; // Replace with actual icon names

const FeatureIcons = () => {
  return (
    <div className="feature-icons">
      <FontAwesomeIcon icon={faIcon1} />
      <FontAwesomeIcon icon={faIcon2} />
      <FontAwesomeIcon icon={faIcon3} />
      {/* Add more icons as needed */}
    </div>
  );
};

export default FeatureIcons;
