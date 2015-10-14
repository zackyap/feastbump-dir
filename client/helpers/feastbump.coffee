Template.applicationLayout.helpers()

Template.menus.helpers
  menus: ->
    Menus.reactive()

Template.affiliates.helpers affiliates: ->
  Affiliates.reactive()


# Meteor.subscribe('allMenus');
# Meteor.subscribe('allAffiliates');
