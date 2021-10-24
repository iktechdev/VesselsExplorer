import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export const addMakers = (coordinates, map, image) =>{
    
    // Add makers
    coordinates.then(
        (item)=>{
            item.forEach((it)=>{

                // Insert image into maker
                const el = document.createElement('div');
                el.className = 'marker';
                el.style.backgroundImage = `url(${image})`;
                el.style.width = `30px`;
                el.style.height = `30px`;
                el.style.backgroundSize = '100%';
                //Alert when maker click
                el.addEventListener('click', () => {
                window.alert("miauuuuu");
                })
                //Add coordinate to map
                    new mapboxgl.Marker(el)
                    .setLngLat([it.lat, it.lng])
                    .addTo(map);    
                })
        }
    )
    
}
