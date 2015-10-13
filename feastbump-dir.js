if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.menu.helpers({

  })
}

menus = new MysqlSubscription('allMenus');

if (Meteor.isServer) {

  // Connecting to Read Replica MySQL server
  var oddleDb = new LiveMysql({
    host: 'beta.cklvyeszoqj3.ap-southeast-1.rds.amazonaws.com:3306',
    port: 3306,
    user: 'root',
    password: 'puToNtaB_1',
    database: 'oddlefnb'
  });

  var closeAndExit = function() {
    oddleDb.end();
    process.exit();
  };

  // Close connections on hot code push
  process.on('SIGTERM', closeAndExit);
  // Close connections on exit (ctrl + c)
  process.on('SIGINT', closeAndExit);

  Meteor.publish('allMenus', function() {
    return oddleDb.select(
      'SELECT * FROM menu',
      [ { table: 'menu' } ]
    );
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
