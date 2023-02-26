import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'


const AddClientModal = () => {
  return (
    <>
        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#addClientModal">
            <div className="d-flex align-items-center">
                <FaUser className="icon"/>
                <div>Add Client</div>
            </div>
        </button>

        <div className="modal fade" id="addClientModal" role="dialog" aria-labelledby="addClientModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="addClientModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default AddClientModal