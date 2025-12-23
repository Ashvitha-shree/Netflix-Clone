const trendingMovies = [
    "https://wallpapercave.com/wp/wp10615961.jpg",
    "https://wallpapercave.com/wp/wp10417436.jpg",
    "https://wallpapercave.com/wp/wp1917154.jpg",
    "https://wallpapercave.com/wp/wp4056411.jpg"
];

const originalMovies = [
    "https://wallpapercave.com/wp/wp1817974.jpg",
    "https://wallpapercave.com/wp/wp8844338.jpg",
    "https://wallpapercave.com/wp/wp9426289.jpg",
    "https://wallpapercave.com/wp/wp4056410.jpg"
];

function loadMovies(sectionId, movies) {
    const section = document.getElementById(sectionId);
    movies.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Movie Poster";
        section.appendChild(img);
    });
}

loadMovies("trending", trendingMovies);
loadMovies("originals", originalMovies);
