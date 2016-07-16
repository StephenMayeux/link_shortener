import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

// Executed whenever user visits a route with token
function onRoute(req, res, next) {
  // take take out of url and find matching link in collection
  const link = Links.findOne({ token: req.params.token });

  // if we find a link, redirect user
  // otherwise, send user to homepage
  if (link) {
    Links.update({token: req.params.token}, {$inc: {clicks: 1}});
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    next();
  }
}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
