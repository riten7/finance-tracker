import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ShowModal = (props) => {
  const { title, open, closeModal, handleAction, children } = props;
  return (
    <Modal
      closeIcon
      open={open}
      title={title}
      onClose={closeModal}>
      <Header icon='archive' content={title} />
      <Modal.Content>
       {children}
      </Modal.Content>
    </Modal>
  )
}

export default ShowModal;