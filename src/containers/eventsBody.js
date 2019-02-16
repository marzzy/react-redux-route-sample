/* eslint-disable */

import React from 'react';
// import { Route, Router } from "react-router-dom"
// import { Route, Link } from "react-router-dom"
// import PropTypes from 'prop-types';

class EvantsBody extends React.Component {
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
        console.log(mydata);
        data.data.map(item => {
          mydata.push({
            name: item.name,
            address: item.address,
            cover: item.cover.original,
            organization: item.organization.name,
            slug: item.slug,
            id: item.id,
          })
        })
        console.log(mydata);
        this.setState({ content: mydata,isLoading: false});
        console.log('hi3');
      })
      .catch(error => this.setState({ errors: `${error}`}))
  }
  
  componentDidMount() {
    this.fetchData();
  }
  render () {
    const { isLoading, content} = this.state;
    return(
      <>
      {!isLoading ?
        (
          <div>
            <h2>صفحه رویداد ها</h2>
            <ul className="eventList">
                {content.map(item => <li key={item.id}><EventItem theItem={item} /></li>)}
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
  const { name, address, cover, organization }= params.theItem;
  return(
    <>
      <img src={cover} alt={name} />
      {name}
      {address}
      <div className="org-container">
        برگذارکننده:
        {organization}
      </div>

    </>
  );
}

export default EvantsBody;