import axios from 'axios';


const url='http://localhost:3004';


export function artistList(keywords){

    const request =  axios.get(`${url}/artists?q=${keywords}`).then(response => response.data);

    return {
        type:'GET_ARTISTS',
        payload: request
    }
}



export function artistListAll(){
    
    //Try it with {data: {property1, property2, property3}}
    const request = axios.get(`${url}/artists?_limit=6`).then(response => response.data);
    


    console.log(request)
    //second way to get data is =>

    //const request =  axios.get(`${url}/artists?_limit=6`).then(response => response.data)

    return {
        type:'GET_ALL_ARTISTS',
        payload:request
    }
}


export function artistDetail(id){
    
    const request =  axios.get(`${url}/artists?id=${id}`).then(response => response.data);

    return {
        type:'GET_ARTISTS_DETAIL',
        payload: request
    }
}

export function clearArtistDetail(){

    return{
        type:'CLEAR_ARTIST_DETAIL',
        payload:null
    }
}