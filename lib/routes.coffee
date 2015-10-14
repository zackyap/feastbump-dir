Router.configure
  layoutTemplate: 'ApplicationLayout'


Router.map ->

  ## Root Index Path
  @route 'root',
    path: '/'
    template: 'menus'
    action: ->
      @render('Menus')
    waitOn: ->
      return Meteor.subscribe('allMenus')

  ## Path to Affiliates Index
  @route 'affiliates',
    path: '/affiliates'
    template: 'affiliates'
    action: ->
      @render('Affiliates')
    waitOn: ->
      return Meteor.subscribe('allAffiliates')
