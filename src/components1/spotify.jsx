const spotify = () => {
    let [spotify,setspotify]=useState(null)
    useEffect(()=>{
        const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21e4f385b1msh8ffe4739fda4e8ep1e7603jsn37ef0a500ede',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    })

    return ( 
        <div>
            {(tracks==null && <h1>Loading...!!!</h1>)}
            {tracks && <div>
                {
                    tracks.map((v, i) => {
                        return (
                           <div></div>
                        )

                })
            }
                </div>}
        </div>
     );
}
 
export default spotify;