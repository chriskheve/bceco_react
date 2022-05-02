import axios from "../axios"


export const createPrestataire = async (data) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const response = await axios.post('/api/prestataire/', data, config) 
    
    return response
};



export const getPrestataire = async () =>{
    

    const response = await axios.get('/api/prestataire/');
    // localStorage.setItem('agent', JSON.stringify(response.data))
    console.log(response)

    return response;
}
