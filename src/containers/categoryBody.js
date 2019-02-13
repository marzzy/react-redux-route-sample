
import React from 'react';
import PropTypes from 'prop-types';

const CatBody = ({ match }) => (
  <div>
    {match.params.cattitle}
  </div>
);

CatBody.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string
    })
  })
};

export default CatBody