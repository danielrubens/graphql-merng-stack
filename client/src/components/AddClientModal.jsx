import {  useReducer } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'


const AddClientModal = () => {
  const initialState = {name: "", email: "", phone: "" }
  const [state, setState] = useReducer((state, action) => ({...state, ...action }), initialState)
  const keys = Object.keys(state)

  return (
    <>
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
            <div className="d-flex align-items-center">
                <FaUser className="icon"/>
                <div>Add Client</div>
            </div>
        </button>

        <div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                            <h5 className="modal-title" id="addClientModalLabel">Add Client</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            {keys.map((_, index) =>(
                                <div className="mb-3">
                                    <label className="form-label">{keys[index]}</label>
                                    <input type="text" className="form-control" id={keys[index]} 
                                           onChange={({target}) => setState({[keys[index]]: target.value})}/>
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddClientModal