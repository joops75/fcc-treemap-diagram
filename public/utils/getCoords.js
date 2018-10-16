let coords = [100, 100]; // arbitary value initially set to avoid error message of 'coords is undefined'

function getCoords(e) { // Function as defined in HTML. HTML must use 'event' keyword and not 'e'.
    const x = e.pageX;
    const y = e.pageY;
    coords = [x, y];
}
