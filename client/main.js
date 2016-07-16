import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import { Links } from '../imports/collections/links';

const App = () => {

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <LinkCreate />
          </div>
        </div>
      </div>
    </div>
  );

};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
