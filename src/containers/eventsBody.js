import React from 'react';
import { Route, Link } from "react-router-dom"
import PropTypes from 'prop-types';

const EvantsBody = ({ match }) => (
  <div>
    <Route path={`${match.url}/:eventTitle`} component={TheEvent} />
    <Route exact path={match.url} render={beforeChooseEvent} />
  </div>
);

const TheEvent = ({ match }) => (
  <div>
    <h3>{match.params.eventTitle}</h3>
    <p>
      این توضیحات یک ایونت خاص است 
    </p>
  </div>
);

const beforeChooseEvent = ({ match }) => (
  <>
    <h2>صفحه رویداد ها</h2>
    <ul>
      <li>
        <Link to={`${match.url}/event1th`}>
          رویداد اول
          </Link>
      </li>
      <li>
        <Link to={`${match.url}/event2nd`}>
          رویداد دوم
          </Link>
      </li>
      <li>
        <Link to={`${match.url}/event3th`}>
          رویداد سوم
          </Link>
      </li>
    </ul>
  </>
);

beforeChooseEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string
    })
  })
};
EvantsBody.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string
    })
  })
};
TheEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string
    })
  })
};

export default EvantsBody;