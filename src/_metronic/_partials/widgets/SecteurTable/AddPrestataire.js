import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { getSecteurInt } from '../../../../api/activite';
import { getIdentification } from '../../../../api/identification';
import { createPrestataire } from '../../../../api/prestataire';
import isEmpty from 'validator/lib/isEmpty'
import alertify from "alertifyjs";
import "../../../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../../../node_modules/alertifyjs/build/css/themes/semantic.css";

const AddPrestataire = ({isDisplayed, handleClose}) => {
    
    const initialForm = {
        designation: "",
        type_prestataire: "",
        telephone: "",
        date_creation: "",
        email: "",
        gerant: "",
        rccm: "",
        id_nat: "",
        adresse: "",
        secteur_intervention: "",
        document: "",
        loading: false
    }
    const [formData, setFormData] = useState(initialForm)
    const [secteurId, setSecteurId] = useState([])
    const [secteurAct, setSecteurAct] = useState([])
    
    const fetchData = React.useCallback(() => {
        getIdentification()
        .then((response) => {
          setSecteurId(response.data.identifications)
          console.log(response.data)
         
          // console.log('liste test ', response)
        })
        .catch((error) => {
          console.log(error)
        })

        
      getSecteurInt()
      .then((response) => {
        setSecteurAct(response.data.secteurInterventions)
        console.log(response.data)
       
        // console.log('liste test ', response)
      })
      .catch((error) => {
        console.log(error)
      })
    
      }, [])
      React.useEffect(() => {
        fetchData()
      }, [fetchData])
    

    
  const {
    designation,
    type_prestataire,
    telephone,
    date_creation,
    email,
    gerant,
    rccm,
    id_nat,
    adresse,
    secteur_intervention,
    document,
    loading

  } = formData;
    
  const handleHide = () =>{
    // setFormData(initialForm)
    handleClose()
  }
  
  const handleCloseAdd = () =>{
    // setFormData(initialForm)
    handleClose()

  }
  
  
  /**********************************************
   * EVENTS HANDLERS 
   *********************************************/
  
   const handleChange= evt =>{
    console.log(evt.target.value);
    setFormData({
        ...formData,
        [evt.target.name] : evt.target.value,
    })

  }

  const handleSubmit =(evt)=>{
      evt.preventDefault()

        if (
            isEmpty(designation) && isEmpty(type_prestataire) && 
            isEmpty(email) && isEmpty(gerant) && isEmpty(rccm) && isEmpty(id_nat) && isEmpty(adresse)
            && isEmpty(secteur_intervention)
        ) {
            alertify.error('Veuillez remplir les champs avec "*"');
        } else {
            
      
            const {  
                designation,
                type_prestataire,
                telephone,
                date_creation,
                email,
                gerant,
                rccm,
                id_nat,
                adresse,
                secteur_intervention,
                document } = formData

            const data = {  
                designation,
                type_prestataire,
                telephone,
                date_creation,
                email,
                gerant,
                rccm,
                id_nat,
                adresse,
                secteur_intervention,
                document
            }
                
            setFormData({...formData, loading: true})
            
            createPrestataire(data)
            .then(res=>{
                alertify.success("Enregistrement réussi");
                setFormData(initialForm)
                handleClose()
            }).catch(err=>{
                setFormData({...formData, loading: false})
                console.log(err)
                alertify.error(err.response.data.errorMessage);
            })
        }

  }
  
  return (
    <div>
        <Modal size="lg" show={isDisplayed} onHide={handleHide}>
                <form onSubmit={handleSubmit} noValidate>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un Prestataire</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="designation">Désignation <span className="text-danger">*</span></label>
                                    <input onChange={handleChange}  className="form-control item" id="designation" value={designation} name="designation"  type="text"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">Téléphone</label>
                                    <input onChange={handleChange}  className="form-control item" id="telephone"  value={telephone} name="telephone"  type="text"/>
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email <span className="text-danger">*</span> </label>
                                    <input onChange={handleChange}  className="form-control item" id="email" name="email" value={email} type="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rccm">N° RCCM </label>
                                    <input onChange={handleChange}  className="form-control item" id="rccm" name="rccm"  value={rccm} type="text"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="secteur_intervention">Secteurs d'intervention <span className="text-danger">*</span></label>
                                    <select onChange={handleChange}   name="secteur_intervention" value={secteur_intervention} className="form-control item" >
                                        <option value="">Séléctionnez...</option>    
                                        {secteurAct && secteurAct.map(sectorAct=>(
                                            <option key={sectorAct._id} value={sectorAct._id}>
                                                {sectorAct.libelle}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="type_prestataire">Identification <span className="text-danger">*</span></label>
                                    <select onChange={handleChange}   name="type_prestataire" value={type_prestataire} className="form-control item"  >
                                    <option value="">Séléctionnez...</option>
                    
                                        {secteurId && secteurId.map(sector=>(
                                            <option key={sector._id} value={sector._id}>
                                                {sector.libelle}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date_creation">Date de création <span className="text-danger">*</span> </label>
                                    <input onChange={handleChange}  className="form-control item" id="date_creation" name="date_creation" value={date_creation}   type="date"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gerant">Gérant <span className="text-danger">*</span> </label>
                                    <input onChange={handleChange}  className="form-control item" id="gerant" name="gerant" value={gerant}   type="text"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id_nat">N° ID NAT </label>
                                    <input onChange={handleChange}  className="form-control item" id="id_nat" name="id_nat" value={id_nat} type="text"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="document">Documents </label>
                                    <input onChange={handleChange}  className="form-control item" id="document" name="document" value={document} type="file" multiple/>
                                </div>
                            </div>
                            <div className="col-12">
                            
                                <div className="form-group">
                                    <label htmlFor="adresse">Adresse <span className="text-danger">*</span> </label>
                                    <input onChange={handleChange} className="form-control item" id="adresse" name="adresse" value={adresse} type="text"/>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                    Annuler
                    </Button>
                        <button className='btn btn-primary' type='submit' >
                        Enregistrer {loading && <span className="mr-1 spinner spinner-white"></span>}
                        </button>
                </Modal.Footer>
                </form>
        </Modal>
    </div>
  )
}

export default AddPrestataire