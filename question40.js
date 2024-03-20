function makeAlbum(artist, title, tracks) {
    return { artist: artist, title: title, tracks: tracks };
}
// Creating three albums without specifying the number of tracks
var album1 = makeAlbum('Taylor Swift', 'Fearless');
var album2 = makeAlbum('Bruno Mars', '24K Magic');
var album3 = makeAlbum('Ed Sheeran', 'Deluxe');
// Creating an album with the number of tracks specified
var album4 = makeAlbum('Sia', 'Reasonable Woman', 15);
// Logging album information
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
