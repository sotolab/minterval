import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    'getCurrentTime': function (){
      //console.log("tt: " + Date.parse(new Date()));
      return Date.parse(new Date());
    }
  });