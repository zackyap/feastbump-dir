Template.menus.helpers({
  menus: function() {
    return Menus.reactive();
  }
})


Meteor.subscribe('allMenus');
