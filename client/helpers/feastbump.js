Template.menus.helpers({
  menus: function() {
    return Menus.reactive();
  }
})

Template.affiliates.helpers({
  affiliates: function() {
    return Affiliates.reactive();
  }
})


Meteor.subscribe('allMenus');
Meteor.subscribe('allAffiliates');
