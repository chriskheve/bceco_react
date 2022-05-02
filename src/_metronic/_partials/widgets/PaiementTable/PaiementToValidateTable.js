import React from 'react'

const PaiementToValidateTable = ({ className }) => {
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
                <th style={{minWidth: "100px"}}>Reference</th>
                <th style={{minWidth: "100px"}}>Client</th>
                <th style={{minWidth: "130px"}}>Type de paiement</th>
                <th style={{minWidth: "100px"}}>Date</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="pl-0 py-0 mt-2">
                  <div className="d-flex align-items-center mt-3">
                    <div className="symbol symbol-50 symbol-light mr-4">
                      <span className="symbol-label">
                        <span className="svg-icon h-75 align-self-end">
                          2
                        </span>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    23000Fc
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    SNEL002-02
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2512455
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Carte de crédit
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    13/04/2022
                  </span>
                </td>
              </tr>
              <tr>
                <td className="pl-0 py-0">
                  <div className="d-flex align-items-center mt-3">
                    <div className="symbol symbol-50 symbol-light mr-4">
                      <span className="symbol-label">
                        <span className="svg-icon h-75 align-self-end">
                          2
                        </span>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    23000Fc
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    SNEL002-02
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2512455
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Carte de crédit
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    13/04/2022
                  </span>
                </td>
              </tr>
              <tr>
                <td className="pl-0 py-0">
                  <div className="d-flex align-items-center  mt-3">
                    <div className="symbol symbol-50 symbol-light mr-4">
                      <span className="symbol-label">
                        <span className="svg-icon h-75 align-self-end">
                          2
                        </span>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    23000Fc
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    SNEL002-02
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2512455
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Carte de crédit
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    13/04/2022
                  </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaiementToValidateTable