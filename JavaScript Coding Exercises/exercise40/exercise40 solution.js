// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

"use strict";

function make_album(artistName, album_title, no_of_tracks = null) {
    let album = {
        artist_name: artistName,
        album_title: album_title
    }

    // Optional Parameter
    if(no_of_tracks != null){
        album['number_of_tracks'] = no_of_tracks;
    }

    return album;
}

let album1 = make_album("Atif Aslam", "Race 2");
let album2 = make_album("Ali Zaffar", "PSL 5");
let album3 = make_album("Lil Nas X", "Industrial babe");

console.log(album1);
console.log(album2);
console.log(album3);

console.log(make_album("Eminem", "When I Collapse", 14));
