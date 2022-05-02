import axios from '../axios'


export const getAllPaiement = async () =>{
    

    const response = await axios.get("/paiement/");
    // console.log('all paiement ' ,response)

    return response;
}

export const getPaiementId = async (id) =>{
    

    const response = await axios.get("/paiement/" + id);
    // console.log('all paiement ' ,response)

    return response;
}

export const getCreditPaiement = async () =>{
    

    const response = await axios.get("/paiement/credit-paiement/");
    // console.log('all paiement ' ,response)

    return response;
}

export const getFacturePaiement = async () =>{
    

    const response = await axios.get("/paiement/facture-paiement/");
    // console.log('all paiement ' ,response)

    return response;
}

export const getFailedPaiement = async () =>{
    

    const response = await axios.get("/paiement/failed-paiement/");
    // console.log('all paiement ' ,response)

    return response;
}

export const getsuccessPaiement = async () =>{
    

    const response = await axios.get("/paiement/success-paiement/");
    // console.log('all paiement ' ,response)

    return response;
}

export const getTotalPaiement = async () =>{
    

    const response = await axios.get("/paiement/total-paiement/");
    // console.log('all paiement ' ,response)

    return response;
}

export const getPaiementAnnuel = async () =>{
    

    const response = await axios.get("/paiement/paiement-annuel/");
    // console.log('all paiement ' ,response)

    return response;
}