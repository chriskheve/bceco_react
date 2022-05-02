import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {  createIdentification,  getIdentification } from '../../../../api/identification'
import isEmpty from 'validator/lib/isEmpty'
import alertify from "alertifyjs";
import "../../../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../../../node_modules/alertifyjs/build/css/themes/semantic.css";

const AddIdentification = ({isDisplayed, handleClose}) => {


    const initialForm = {
        libelle: "",
        description: "",
        loading: false
    }
    
    const [formData, setFormData] = useState(initialForm)

    

  const {
    libelle,
    description,
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

    if (isEmpty(libelle)) {
        alertify.error('Veuillez remplir les champs avec "*"');
    } else {
        
        const { libelle, description } = formData
        const data = { libelle, description }
        setFormData({...formData, loading: true})
        createIdentification(data)
        .then(res=>{
            console.log(res)
            alertify.success("Enregistrement réussi");
            setFormData(initialForm)
            handleClose()
        })
        .catch(err=>{
            setFormData({...formData, loading: false})
            console.log(err)
            alertify.error(err.response.data.errorMessage);
        })
    }
      
  }

  return (
    <div>
        <Modal show={isDisplayed} onHide={handleHide}>
                <form onSubmit={handleSubmit} noValidate>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un type d'identification</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="designation">Libelle <span className="text-danger">*</span></label>
                                    <input onChange={handleChange}  className="form-control item" id="designation"  name="libelle" value={libelle}  type="text"/>
                                </div>
                                <div className="form-group">
                                    <label className="text-secondary">Description</label>
                                    <textarea 
                                        className="form-control" 
                                        row="3"
                                        name="description"
                                        value={description}
                                        onChange={handleChange}
                                    ></textarea>
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

export default AddIdentification