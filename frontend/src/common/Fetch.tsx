
export default async function FetchAPI(endpoint:string, method:string, body?:object){

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    return await fetch(`${API_BASE_URL}${endpoint}`, {body: JSON.stringify(body), method , mode:'cors', headers:{'Content-Type': 'application/json'}})
    .then(resp => resp.json())
}