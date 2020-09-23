import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { Dropdown, Form, Input, Button } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import { addTransaction, updateAccount, addTag } from '../../actions/actionCreators';
import { accountOptionsForTx, getRandomId } from '../../utility/constant';

const TransactionForm = ({ type, transaction, handleFormSubmit }) => {
  const dispatch = useDispatch();
  const { accounts } = useSelector(state => state.accounts);
  const { tags } = useSelector(state => state.tags);
  const accountOptions = accountOptionsForTx(accounts);

  const txLength = transaction && Object.keys(transaction).length;

  const defaultState = transaction ? { ...transaction, date: moment(transaction.date).toDate() } : {
    amount: '',
    accountId: accountOptions[0].value,
    date: '',
    note: '',
    accountName: accountOptions[0].text,
  }
  const [transactionDetail, setTransactionDetail] = React.useState(defaultState);

  const onAddTag = (_, { value }) => {
    dispatch(addTag({ key: value, value, text: value }));
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
    if (!transaction) {
      dispatch(addTransaction({
        ...transactionDetail,
        id: getRandomId(),
        type,
      }));
    } else {
      handleFormSubmit(transactionDetail);
    }
    dispatch(updateAccount({
      id: transactionDetail.accountId,
      amount: transactionDetail.amount,
      type,
    }));
    resetForm();
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
              required
              name="tags"
              multiple
              selection
              search
              allowAdditions
              closeOnChange
              placeholder="Choose existing tags or add new"
              value={transactionDetail ?.tags || []}
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
              clearable={false}
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
            <Button primary fluid>{transaction ? `Update` : `Save`}</Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </>
  )
}

export default TransactionForm;