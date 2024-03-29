# MySQL
oddleDb = new LiveMysql(
  host: 'beta.cklvyeszoqj3.ap-southeast-1.rds.amazonaws.com'
  port: 3306
  user: 'root'
  password: 'puToNtaB_1'
  database: 'oddlefnb')
# PostgresQL
feastbumpDb = new LivePg('postgres://feastbump:feastbump_rocks@feastbump-db.cklvyeszoqj3.ap-southeast-1.rds.amazonaws.com/feastbump_production', 'CHANNEL')

closeAndExit = ->
  oddleDb.end()
  feastbumpDb.cleanup process.exit
  process.exit()
  return

# Close connections on hot code push
process.on 'SIGTERM', closeAndExit
# Close connections on exit (ctrl + c)
process.on 'SIGINT', closeAndExit

Meteor.publish 'allMenus', ->
  oddleDb.select 'SELECT * FROM menu', [ { table: 'menu' } ]

Meteor.publish 'allAffiliates', ->
  feastbumpDb.select 'SELECT * FROM affiliates'


Meteor.startup ->
  # code to run on server at startup
  return
