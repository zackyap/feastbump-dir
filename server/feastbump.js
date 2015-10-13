var oddleDb = new LiveMysql({
  host: 'beta.cklvyeszoqj3.ap-southeast-1.rds.amazonaws.com',
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
