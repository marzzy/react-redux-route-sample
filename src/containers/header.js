import React from 'react';

function SearchBar() {
  return (
    <>
      <form className="header-search">
        <input type="text" placeholder="جست‌و‌جو" />
        <button>s</button>
      </form>
    </>
  );
}

function LogoTop() {
  return (
    <div className="header-logo">
      <img src={require("../webroot/logo.png")} alt="ivand logo"/>
    </div>
  );
}

function MainHeader() {
  return (
    <>
      <SearchBar />
      <LogoTop />
    </>
  );
}

export default MainHeader