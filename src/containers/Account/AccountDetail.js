import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Divider } from 'semantic-ui-react';

import AccountList from './AccountList';
import AccountForm from './AccountForm';
import ShowModal from '../../components/ShowModal';
import { addAccount } from '../../actions/actionCreators';

const AccountDetail = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const addNewAccount = () => {
    setShowModal(true);
  }
  const handleFormSubmit = (account) => {
    setShowModal(false);
    dispatch(addAccount(account));
  }

  return (
    <div className="account-detail-container">
      <Button positive content="New" onClick={addNewAccount}/>
      <Divider />
      <AccountList />
      {showModal && <ShowModal 
      open={showModal}
      title='Add Account'
      closeModal={() => setShowModal(false)}>
        <AccountForm handleFormSubmit={handleFormSubmit}/>
      </ShowModal>}
    </div>
  )
}

export default AccountDetail;