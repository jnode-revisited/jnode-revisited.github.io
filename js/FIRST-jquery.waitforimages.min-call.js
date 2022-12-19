$('root').waitForImages(function() {
    // All descendant images have loaded, now slide up.
    $(this).slideUp();
});