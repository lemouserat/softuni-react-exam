import { useReducer, useState } from "react"
import {Modal, Button} from "react-bootstrap"
import { blogReducer } from "../../reducers/blogReducer"
import { BlogPostDetails } from "../BlogPostDetails.js/BlogPostDetails"

import {show, setShow} from "../BlogPostDetails.js/BlogPostDetails"


export const DeleteModal = ({
    onDeleteClick
}) => {

    
    const [blog, dispatch] = useReducer(blogReducer, {})

    const handleClose = () => {
        setShow(false)
    }

    return (
        <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete {blog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Think about everyone who would want to see your blog first!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onDeleteClick(blog._id)}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
}