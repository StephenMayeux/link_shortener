/*
** Because this file isn't in either the client or server dirs,
** it will not be loaded automatically. We need to import this file
** in both the main.js files in /clients and /server.
*/

import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match } from 'meteor/check'; // validation

Meteor.methods({
  'links.insert': function(url) {
    check(url, Match.Where(url => validUrl.isUri(url)));
  }
});

export const Links = new Mongo.Collection('links');
