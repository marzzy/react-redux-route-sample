import React from 'react';
import { Route, Link } from "react-router-dom"
import PropTypes from 'prop-types';
import TheEvent from './singleEventBody'

const EvantsBody = ({ match }) => (
  <div>
    <Route path={`${match.url}/:eventTitle`} component={TheEvent} />
    <Route exact path={match.url} component={MainEventPage} />
  </div>
);

class MainEventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      isLoading: true,
      errors: null
    };
  }

  fetchData() {
    fetch('https://api.evand.com/events')
      .then(res => res.json())
      .then((data) => {
        let mydata = [];
        data.data.map(item => 
          mydata.push({
            id: item.id,
            slug: item.slug,
            name: item.name,
            address: item.address,
            cover: item.cover,
            organization: item.organization.name,
          })
        );
        this.setState({ content: mydata,isLoading: false});
      })
      .catch(error => this.setState({ errors: `${error}`}))
  }
  
  componentDidMount() {
    this.fetchData();
  }
  render () {
    const { isLoading, content } = this.state;
    return(
      <>
      {!isLoading ?
        (
          <div>
            <h2>صفحه رویداد ها</h2>
            <ul className="eventList">
                {content.map(item => <li key={item.id}><EventItem match={this.props.match} theItem={item} /></li>)}
            </ul>
          </div>
        ) : (
          <p>
            در حال بارگزاری ... 
          </p>
        )
      }
      </>
    );
  }
}

function EventItem (params) {
  const { slug, name, address, cover, organization }= params.theItem;
  return(
    <>
      { cover ?
        (<img src={cover.original} alt={name} />) :
        (<img src={require("../webroot/default-cover.jpg")} alt={name} />)
      }
      <p>
        <Link to={`${params.match.url}/${slug}`} >
          {name}
        </Link>
      </p>
      <p>
        {address}
      </p>
      <div className="org-container">
        برگذارکننده:
        {organization}
      </div>

    </>
  );
}

EvantsBody.propTypes = {
  match: PropTypes.shape
};
MainEventPage.propTypes = {
  match: PropTypes.shape
};


export default EvantsBody;