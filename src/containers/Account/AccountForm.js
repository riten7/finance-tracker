import React from 'react';
import { Form } from 'semantic-ui-react';
import { accountTypes, getRandomId } from '../../utility/constant';

const AccountForm = (props) => {

  const defaultState = {
      name: '',
      type: accountTypes[0].value,
      balance: 0,
    }

  const handleSubmit = () => {
    props.handleFormSubmit({
      ...accountDetail, 
      id: getRandomId(),
    });
    resetForm();
  }

  const [accountDetail, setAccountDetail] = React.useState(defaultState);
  const handleChange = (_, { name, value }) => {
    setAccountDetail({
      ...accountDetail,
      [name]: value
    });
  };

  const resetForm = () => {
    setAccountDetail(defaultState);
  }

  return (
    <Form className="account-form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          width={8}
          required
          label="Name"
          name="name"
          placeholder="Account name"
          value={accountDetail.name}
          onChange={handleChange}
        />
        <Form.Select
          width={8}
          label="Type"
          name="type"
          value={accountDetail.type}
          options={accountTypes}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Input
        width={8}
        type="number"
        placeholder="Balance"
        label='Balance'
        name="balance"
        value={accountDetail.balance > 0 ? accountDetail.balance : '' }
        onChange={handleChange}
      />
      
      <Form.Button width={8} primary content="Save Account" />
    </Form>
  );
}

export default AccountForm;