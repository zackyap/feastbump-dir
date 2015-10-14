Router.configure({
  layoutTemplate: 'ApplicationLayout'
});


Router.route('/', function () {
  this.render('Menus');
}, {
  name: 'home',
  template: 'menus',
  waitOn: function () {
    return Meteor.subscribe('allMenus');;
  }
});

Router.route('/affiliates', function () {
  this.render('Affiliates');
}, {
  name: 'affiliates',
  waitOn: function () {
    return Meteor.subscribe('allAffiliates');;
  }
});
