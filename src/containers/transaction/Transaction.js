import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { Dropdown, Form, Input, Button } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import { addTransaction, updateAccount } from '../../actions/actionCreators';
import { accountOptionsForTx, getRandomId, getAccountName } from '../../utility/constant';
import TransactionList from './TransactionList';

const Transaction = (props) => {
  const dispatch = useDispatch();
  const { accounts } = useSelector(state => state.accounts);
  
  const [tags, setTags] = React.useState([]);
  const defaultState = {
   amount: 0,
   accountId: accounts[0].id,
   date: '',
   note: '',
  }
  const [transactionDetail, setTransactionDetail] = React.useState(defaultState);

  const accountOptions = accountOptionsForTx(accounts);
  const accountName = getAccountName(accounts, transactionDetail.accountId)

  const onAddTag = (_, { value }) => {
    setTags([...tags, {
      key: value,
      value,
      text: value,
    }]);
  }

  const handleChange = (_, { name, value }) => {
     if(name === 'date') {
      value = moment(value).format("dddd, MMMM Do YYYY");
     }
     if(name === 'amount') {
       value = parseFloat(value);
     }
     setTransactionDetail({
      ...transactionDetail,
      [name]: value
    });
  }

  const handleSubmit = () => {
    console.log('transactionDetail', transactionDetail);
    resetForm()
    dispatch(addTransaction({
      ...transactionDetail,
      id: getRandomId(),
      type: props.type,
      accountName,
    }));
    dispatch(updateAccount({
      id: transactionDetail.accountId,
      amount: transactionDetail.amount,
      type: props.type,
    }));
  };

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
              value={accountOptions[transactionDetail.accountId]}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field width={5}>
            <label>Amount</label>
            <Input
              required
              type="number"
              name="amount"
              //value={transactionDetail.amount}
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
              //value={this.props.form.tags[this.props.form.kind]}
              options={tags}
              onChange={handleChange}
              onAddItem={onAddTag}
            />
          </Form.Field>
          <Form.Field width={5}>
            <label>Date</label>
            <SemanticDatepicker
              fluid
              required
              name="date"
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
            <Button primary fluid>Add Expense</Button>
          </Form.Field>
        </Form.Group>
      </Form>
      <TransactionList />
    </>
  )
}

export default Transaction;