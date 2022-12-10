# Test project for GlobalSign

## Description
Develop GIF images storing app in Angular. User wants to have an app to keep their collection of GIF
images so they can search them in convinient way and add them from Giphy. App will have only one
screen with two components. Components are:
1. Space with GIF images added by user, with ability to search for them by name and apply sort
by date added or custom sort with drag and drop. Images can also be downloaded (saved as
a file).
2. Space with text input with the ability to search for GIFs with public Giphy API and add
images to the user store setting their name.

Components should be displayed on the same page. Any actions should not cause page reload,
however, if user reloads the page, state should be preserved.
For component #2:
+ images should be stored in local storage in form of name and url;
+ search results should exclude already added images;
+ adding images to the user’s store can be done in any way like appearing button, grab and
drop or anything else;
+ after user adds image, it should appear in his storage without page reload;

Design and CSS are not a must but page should look nice.
You can use any libs and tools and anything you find on the internet.

## Questions
Giphy api not to provided name of gif or any tag to search gifs by so I made search for stored gifs by gif tittle. Is it ok?
May be I should make any paginations for both list of gifs?
Some strange description for ordering stored gifs. List of stored gifs is sorted by added date (when add new gifs) and user can reorder stored gifs by drag&drop. 