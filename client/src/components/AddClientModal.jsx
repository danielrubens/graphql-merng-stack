import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'


const AddClientModal = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
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
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value={name} 
                                       onChange={({target}) => setName(target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email} 
                                       onChange={({target}) => setEmail(target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" value={phone} 
                                       onChange={({target}) => setPhone(target.value)}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddClientModal