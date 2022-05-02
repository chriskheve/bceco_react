import axios from "../axios"


export const createIdentification = async (data) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const response = await axios.post('/api/identification/', data, config) 
    
    return response
};



export const getIdentification = async () =>{
    

    const response = await axios.get('/api/identification/');
    // localStorage.setItem('agent', JSON.stringify(response.data))
    console.log(response)

    return response;
}
