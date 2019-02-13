import './index.scss';

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MainHeader from './containers/header'
import Home from './containers/home'
import EvantsBody from './containers/eventsBody'
import CatBody from './containers/categoryBody'
// import MainFooter from './containers/footer'

function App () {
  return (
    <Router>
      <div>
        <div id="main-header">
          <nav className="header-navbar">
            <ul>
              <li>
                <Link to="/">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/events">
                  رویداد ها
                </Link>
              </li>
            </ul>
          </nav>
          <MainHeader />
        </div>

        <div id="content">
          <Route exact path="/" component={Home} />
          <Route path="/events" component={EvantsBody} />
          <Route path="/category/:cattitle" component={CatBody} />
        </div>

        <div id="main-footer">
          <ul>
            <li>
              دسته ها
            </li>
            <li>
              <Link to="/category/tech">
                تکنولوژي
              </Link>
            </li>
            <li>
              <Link to="/category/ent">
                کارآفرینی
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </Router>
  );
}


ReactDOM.render(<><App /></>,document.getElementById('root'));