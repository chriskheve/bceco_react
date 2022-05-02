import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import SVG from "react-inlinesvg";
import { getLocalStorage } from '../../../../_helpers/localStorage';
import { toAbsoluteUrl } from "../../../_helpers";
import AddPrestataire from './AddPrestataire';
import { prestataire } from "../../../../data/prestataire"
import { getAll, getPrestataire } from '../../../../api/prestataire';

const SecteurPrestationTable = ({className}) => {
    const [user, setUser] = useState(getLocalStorage("persist:v713-demo1-auth"))
    // const [prestataire, setPrestataire] = useState([])
    const [show, setShow] = useState(false)
    const [presta, setPresta] = useState([])

    
    const fetchData = React.useCallback(() => {
      getPrestataire()
      .then((response) => {
        setPresta(response.data.prestataires)
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

    useEffect(()=>{
        // setUser(JSON.parse(user.user))
    }, [])
    
  // const fetchData = React.useCallback(() => {
  

  //   getAll()
  //   .then(response => {
  //     setPrestataire(response.data)
  //     console.log(response.data)
        
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })


  // }, [])
  // React.useEffect(() => {
  //   fetchData()
  // }, [fetchData])

    
    const handleShow = () => {
        setShow(true);
        console.log((user))
    }

    
    const handleClose = () => {
        setShow(false);
        // console.log(show)
    }

  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Liste de prestataires
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            {presta.length} prestataire(s)
          </span>
        </h3>
        <div className="card-toolbar">
            {JSON.parse(user.user).roles[0] === 1 &&
                <Button variant="primary" onClick={handleShow}>
                    <span className="svg-icon svg-icon-md svg-icon-white">
                    <SVG
                        src={toAbsoluteUrl(
                        "/media/svg/icons/Communication/Add-user.svg"
                        )}
                        className="h-50 align-self-center"
                    ></SVG>
                    </span>
                Ajouter un prestataire
                </Button>
            }
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        {/* begin::Table */}
        
        
        <div className="table-responsive">
            <table
              className="table table-head-custom table-vertical-center"
              id="patient_list"
            >
              <thead>
                <tr className="text-left">
                  <th className="pr-0" style={{ width: "50px" }}>
                    Designation
                  </th>
                  <th style={{ minWidth: "100px" }} />
                  <th style={{ minWidth: "100px" }}>Contact</th>
                  <th style={{ minWidth: "100px" }}>Localisation</th>
                  <th style={{ minWidth: "100px" }}>Gerant</th>
                  <th style={{ minWidth: "150px" }}>Secteur d'intervention</th>
                  <th className="pr-0 text-right" style={{ minWidth: "120px" }}>
                    Identification
                  </th>
                  <th className="pr-0 text-right" style={{ minWidth: "120px" }}>
                    Date de création
                  </th>
                </tr>
              </thead>
              <tbody>
              
                {presta.map((item, index) => {
                    return(
                        <tr key={item.id} >
                          <td className="pr-0">
                            <div className="symbol symbol-50 symbol-light mt-1">
                              <span className="symbol-label">
                                    <SVG
                                    src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
                                    className="h-75 align-self-end"
                                    ></SVG>
                              </span>
                            </div>
                          </td>
                          <td className="pl-0">
                            <a
                              href="#"
                              className="text-dark-75 font-weight-bolder text-hover-primary mt-1 font-size-lg"
                            >
                              {item.designation}
                            </a>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {item.telephone}
                            </span>
                            <span className="text-muted font-weight-bold">
                                {item.email}
                            </span><br/>
                            <span className="text-muted font-weight-bold">
                                {item.adresse}
                            </span>
                          </td>
                          <td className="pl-0">
                            <a
                              href="#"
                              className="text-dark-75 font-weight-bolder text-hover-primary mt-1 font-size-lg"
                            >
                              {/* {item.localisation} */}
                            </a>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {item.gerant}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {item.secteur_intervention.libelle}
                            </span>
                          </td>
                          <td className="pr-0 text-right">
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {item.type_prestataire.libelle}
                            </span>
                          </td>
                          <td className="pr-0 text-right">
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {/* {moment(item.date_creation).format()} */}
                                {item.date_creation}
                            </span>
                            <span className="text-muted font-weight-bold">
                                {/* {item.annee_experience} ans */}
                            </span>
                          </td>
                        </tr>
                    )
                })}
            

              

              </tbody>
            </table>
          </div>
        {/* end::Table */}
      </div>
      {/* end::Body */}
      

      <AddPrestataire handleClose={handleClose} isDisplayed={show} />


    </div>
  )
}

export default SecteurPrestationTable