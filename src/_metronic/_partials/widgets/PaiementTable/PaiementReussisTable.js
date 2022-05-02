import React, { useState } from 'react'
import { getsuccessPaiement } from '../../../../api/paiement'

const PaiementReussisTable = ({ className }) => {
  
  const [all_paiement, setAllPaiement] = useState([])
  
  const fetchData = React.useCallback(() => {
  

    getsuccessPaiement()
    .then(response => {
      setAllPaiement(response.data)
        
    })
    .catch((error) => {
      // console.log(error)
    })


  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
  
  return (
      
    <div className={`card card-custom ${className}`}>
    {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">Transactions</span>
          {/* <span className="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span> */}
        </h3>
      </div>
      {/* Body */}
      <div className="card-body pt-0 pb-3">
        <div className="tab-content">
          <div className="table-responsive">
            <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
              <thead className="pb-8">
              <tr className="text-left text-uppercase">
                <th className="pl-7" style={{minWidth: "50px"}}><span className="text-dark-75">#</span></th>
                <th style={{minWidth: "100px"}}>Montant</th>
                <th style={{minWidth: "100px"}}>Matricule</th>
                <th style={{minWidth: "100px"}}>Client</th>
                <th style={{minWidth: "130px"}}>Type de paiement</th>
                <th style={{minWidth: "100px"}}>Statut</th>
                <th style={{minWidth: "100px"}}>Date</th>
              </tr>
              </thead>
              <tbody>
                {typeof(all_paiement) === 'object' && all_paiement.map((item, index) => {
                  return (
                    <tr>
                      <td className="pl-0 py-0">
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon h-75 align-self-end">
                                {index + 1}
                              </span>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {item.montant && item.montant} {item.devise && item.devise.devise }
                        </span>
                      </td>
                      <td>
                        <div className={`label label-lg label-success   label-inline`}>
                            {item.credit? "crédit: ": "facture: " }
                        </div>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {item.credit && item.credit.compteur && item.credit.compteur.matricule }
                          {item.facture && item.facture.matricule}
                        </span>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {
                            item.facture && item.facture.client && item.facture.client.nom + " " +
                            item.facture.client.postnom + " " + item.facture.client.prenom
                          }
                          {
                            item.credit && item.credit.compteur && item.credit.compteur.proprietaire &&  
                            item.credit.compteur.proprietaire.nom + " " + item.credit.compteur.proprietaire.postnom + " " + 
                            item.credit.compteur.proprietaire.prenom
                          }
                        </span>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {item.typePaiement && item.typePaiement.nom}
                        </span>
                      </td>
                      <td className="pr-0">
                        <a href="#" className="btn btn-light-success font-weight-bolder font-size-sm">Succès</a>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          13/04/2022
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaiementReussisTable