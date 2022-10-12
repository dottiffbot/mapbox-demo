// import mapboxgl from 'mapbox-gl';
async function mapSetup(){
    const res = await fetch ("/getmapbox");
    const data = await res.json()
    // const token = data.token
    // console.log(token)
mapboxgl.accessToken = data.token;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});
}

mapSetup()