function dataOphalen() {
    fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=netherlands&api_key=f2ab12a57fcca396592451123c0c3ba1&format=json")
        .then(response => response.json())
        .then(data => {
            EverythingToLowerCase(data)
            deleteUnusedData(data)
            // removeEverythingAfterOf(data);
        
            // console.log(data)
            // console.log(data.tracks.track[0].name)
            return data
        }).then(cleanedData => {
            console.log(cleanedData)
        })
}

function EverythingToLowerCase(data){
    for (let i = 0; i < data.tracks.track.length; i++) {
        
        data.tracks.track[i].name = data.tracks.track[i].name.toLowerCase();
    }
}

function deleteUnusedData(data) {
    data.tracks.track.forEach(track => {
        console.log(track.name);
    });
}

dataOphalen();