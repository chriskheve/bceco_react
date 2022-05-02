import axios from "../axios"


export const createSecteurInt = async (data) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const response = await axios.post('/api/secteur_intervention/', data, config) 
    
    return response
};



export const getSecteurInt = async () =>{
    

    const response = await axios.get('/api/secteur_intervention/');
    // localStorage.setItem('agent', JSON.stringify(response.data))
    console.log(response)

    return response;
}
