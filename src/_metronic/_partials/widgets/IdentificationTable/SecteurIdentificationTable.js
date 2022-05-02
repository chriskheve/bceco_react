import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { toAbsoluteUrl } from '../../../_helpers'
import SVG from "react-inlinesvg";
import { getLocalStorage } from '../../../../_helpers/localStorage';
import AddIdentification from './AddIdentification';
import { getIdentification } from '../../../../api/identification';

const SecteurIdentificationTable = ({ className }) => {


    const [user, setUser] = useState(getLocalStorage("persist:v713-demo1-auth"))
    const [show, setShow] = useState(false)
    const [secteurId, setSecteurId] = useState([])

    
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
  
    }, [])
    React.useEffect(() => {
      fetchData()
    }, [fetchData])
    
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
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Liste de type d'identification
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            {secteurId.length} type
          </span>
        </h3>

        
        
        <Button variant="primary"  onClick={handleShow} >
            <span className="svg-icon svg-icon-md svg-icon-white">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Design/Patch.svg"
                )}
                className="h-50 align-self-center"
              ></SVG>
            </span>
          Créer un type d'identification
        </Button>
        
      </div>
      {/* Body */}
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className={`tab-content mt-5`} id="myTabTables12">
          {/* begin::Tap pane MONTH */}
          <div
            className={`tab-pane fade  show active`}
          >
            
        <div className="table-responsive">
          <table className="table table-borderless table-vertical-center" id="typeTest_list">
            <thead>
              <tr>
                <th className="p-0" style={{ width: "10px" }} />
                <th className="p-0" style={{ minWidth: "200px" }} />
                <th className="p-0" style={{ minWidth: "110px" }} />
                <th className="p-0" style={{ minWidth: "150px" }} />
              </tr>
            </thead>
            <tbody>
            
                {secteurId.map((item, index) => {
                    return(
                        <tr key={item.id} >
                        <td className="pl-0 py-4">
                            <div className="symbol symbol-50 symbol-light mr-1">
                            <span className="symbol-label">
                                <SVG
                                src={toAbsoluteUrl("/media/svg/icons/Design/Patch.svg")}
                                className="h-50 align-self-center"
                                ></SVG>
                            </span>
                            </div>
                        </td>
                        <td className="pl-0">
                            <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                            >
                            {item.libelle}
                            </a>
                        </td>
                        <td className="text-right">
                            {/* <span className="label label-lg label-light-danger label-inline">
                            code
                            </span> */}
                        </td>
                        <td className="text-right pr-0">
                            
                            {/* <button 
                            className="btn btn-icon btn-light btn-sm mx-3"
                            >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                    <SVG
                                    src={toAbsoluteUrl(
                                        "/media/svg/icons/Communication/Write.svg"
                                    )}
                                    ></SVG>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-light btn-sm">
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                    <SVG
                                    src={toAbsoluteUrl(
                                        "/media/svg/icons/General/Trash.svg"
                                    )}
                                    ></SVG>
                                </span>
                            </button> */}
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
      
      
      {/* ********************* Add identification modal ************************* */}
      <AddIdentification handleClose={handleClose} isDisplayed={show} />
        


    </div>
  )
}

export default SecteurIdentificationTable