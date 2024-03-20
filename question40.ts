type Album = {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    return { artist, title, tracks };
}

// Creating three albums without specifying the number of tracks
const album1: Album = makeAlbum('Taylor Swift', 'Fearless');
const album2: Album = makeAlbum('Bruno Mars', '24K Magic');
const album3: Album = makeAlbum('Ed Sheeran', 'Deluxe');

// Creating an album with the number of tracks specified
const album4: Album = makeAlbum('Sia', 'Reasonable Woman', 15);

// Logging album information
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
