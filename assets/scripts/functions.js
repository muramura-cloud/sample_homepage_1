function getDir(place, n) {
    return place.pathname.replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((n || 0) + 1) + "}$"), "/");
}
