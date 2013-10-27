App.Router.map(function(){
    this.route("index", { path: "/" });
    this.resource("photos", { path: "/photos" }, function() {
       this.route("selectedPhoto", { path: ":photo_id" });
    });

    //this.resource("photos");
    //this.resource("selectedPhoto", { path: "/photos/:photo_id" })
});

App.IndexRoute = Ember.Route.extend({
    /*redirect: function() {
        //var firstPhoto = this.modelFor('photos').get('firstObject');
        this.transitionTo("photos", photos[0]);
    }*/

    model: function() {
      return this.store.find('photo');
    },

    afterModel: function(photos) {
        //this.transitionTo("selectedPhoto", photos[0]);
        this.transitionTo("photos");
    }
});

App.PhotosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('photo');
    }
});