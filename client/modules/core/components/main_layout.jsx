import React from 'react';

const Layout = ({content = () => null }) => (
  <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">O Shopping</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="/">Products</a></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/carts/list">Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>
   <div className="row">
    <div className="col-md-12 col-xs-12">
     {content()}
    </div>
   </div>
  </div>
);

export default Layout;
