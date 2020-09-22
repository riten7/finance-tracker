import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Dropdown, Form, Input, Button } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import { addTransaction, updateAccount } from '../../actions/actionCreators';
import { accountOptionsForTx, getRandomId } from '../../utility/constant';

const TransactionForm = ({ type }) => {
  const dispatch = useDispatch();
  const { accounts } = useSelector(state => state.accounts);
  const accountOptions = accountOptionsForTx(accounts);

  const [tags, setTags] = React.useState([]);

  const defaultState = {
    amount: '',
    accountId: accountOptions[0].value,
    date: '',
    note: '',
    accountName: accountOptions[0].text,
  }
  const [transactionDetail, setTransactionDetail] = React.useState(defaultState);

  const onAddTag = (_, { value }) => {
    setTags([...tags, {
      key: value,
      value,
      text: value,
    }]);
  }

  const handleChange = (_, { name, value }) => {
    if (name === 'amount') {
      value = parseFloat(value);
    }
    setTransactionDetail({
      ...transactionDetail,
      [name]: value
    });
  }

  const handleSubmit = () => {
    resetForm()
    dispatch(addTransaction({
      ...transactionDetail,
      id: getRandomId(),
      type,
    }));
    dispatch(updateAccount({
      id: transactionDetail.accountId,
      amount: transactionDetail.amount,
      type,
    }));
  };

  const handleDropdownChange = (_, { value }) => {
    const account = accountOptions.find(item => item.key === value);
    setTransactionDetail({
      ...transactionDetail,
      accountId: account.value,
      accountName: account.text,
    });
  }

  const resetForm = () => {
    setTransactionDetail(defaultState);
  }

  return (
    <>
      <Form className="transaction-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Field width={11}>
            <label>Account</label>
            <Dropdown
              name="account"
              selection
              options={accountOptions}
              value={transactionDetail.accountId}
              onChange={handleDropdownChange}
            />
          </Form.Field>
          <Form.Field width={5}>
            <label>Amount</label>
            <Input
              required
              type="number"
              name="amount"
              value={transactionDetail.amount}
              onChange={handleChange}
            />
          </Form.Field>

        </Form.Group>
        <Form.Group>
          <Form.Field width={11}>
            <label>Tags</label>
            <Dropdown
              name="tags"
              multiple
              selection
              search
              allowAdditions
              closeOnChange
              placeholder="Choose existing tags or add new"
              //value={}
              options={tags}
              onChange={handleChange}
              onAddItem={onAddTag}
            />
          </Form.Field>
          <Form.Field width={5} className="transaction-form__date">
            <label>Date</label>
            <SemanticDatepicker
              fluid
              required
              name="date"
              value={transactionDetail.date}
              onChange={handleChange} />
          </Form.Field>
        </Form.Group>

        <Form.Group>
          <Form.Field width={11}>
            <Input
              placeholder="Note"
              name="note"
              value={transactionDetail.note}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field width={5}>
            <Button primary fluid>{type === 'income' ? 'Add Income' : 'Add Expense'}</Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </>
  )
}

export default TransactionForm;