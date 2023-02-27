import {  useReducer } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'


const AddClientModal = () => {
  const initialState = {name: "", email: "", phone: "" }
  const [state, setState] = useReducer((state, action) => ({...state, ...action }), initialState)
  const keys = Object.keys(state)

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {name: state.name, email: state.email, phone: state.phone},
    update: (cache, { data: { addClient } }) => {
        const { clients } = cache.readQuery({ query: GET_CLIENTS })
        cache.writeQuery({
            query: GET_CLIENTS,
            // data: { clients: clients.concat([addClient]) }
            data: { clients: [...clients, addClient] }
        })
    }
  })
  
  const onSubmit = (e) => {
    if(keys.some((key) => state[key] === '')) {
        e.preventDefault()
        return alert('Please, fill in all fields')
    }
    addClient(state.name, state.email, state.phone)
    e.preventDefault()
  }

  return (
    <>
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
            <div className="d-flex align-items-center">
                <FaUser className="icon" />
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
                        <form onSubmit={onSubmit}>
                            {keys.map((_, index) =>(
                                <div className="mb-3">
                                    <label className="form-label">{keys[index]}</label>
                                    <input type="text" className="form-control" id={keys[index]} 
                                           onChange={({target}) => setState({[keys[index]]: target.value})}/>
                                </div>
                            ))}
                            <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddClientModal