import React from 'react';
import PropTypes from 'prop-types';


const TheEvent = ({ match }) => (
  <div>
    <h3>{match.params.eventTitle}</h3>
    <p>
      این توضیحات یک ایونت خاص است
    </p>
  </div>
);

TheEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string
    })
  })
};

export default TheEvent