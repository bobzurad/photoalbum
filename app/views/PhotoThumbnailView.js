App.PhotoThumbnailView = Ember.View.extend({
    tagName: "img",                     //this view will be rendered as an img tag
    attributeBindings: ["src"],
    classNames: ['thumbnailItem'],      //css class names
    classNameBindings: 'isSelected',    //we're creating a custom css class: is-selected

    /*
        append the CSS class is-selected to the view if the isSelected computed property returns true,
        which it only does if the views photo id is the same as the selected photos id
     */
    isSelected: function() {
        return this.get('content.id') === this.get('controller.controllers.photosSelectedPhoto.content.id');
    }.property('controller.controllers.photosSelectedPhoto.content', 'content')
});