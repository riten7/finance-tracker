import moment from 'moment';

const GroupToTextMap = {
  'cash': 'Cash',
  'bankAccount': 'Bank Account',
  'deposit': 'Deposit',
  'credit': 'Credit',
  'asset': 'Asset'
};

export const accountTypes = [
  { key: 'cash', text: 'Cash', value: 'cash' },
  { key: 'bankAccount', text: 'Bank Account', value: 'bankAccount' },
  { key: 'credit', text: 'Credit', value: 'credit' },
  { key: 'deposit', text: 'Deposit', value: 'deposit' },
  { key: 'asset', text: 'Asset', value: 'asset' }
];

export const filterTypes = [
  {
    key: 'all',
    text: 'Show ALL',
    value: 'all'
  },
  {
    key: '1',
    text: 'Today',
    value: '1',
  },
  {
    key: '7',
    text: 'Last 7 Days',
    value: '7',
  },
  {
    key: '30',
    text: 'Last 30 Days',
    value: '30',
  }
];

export const getRandomId = () => (Math.random().toString(36).replace('0.', ''));

export const groupAccounts = (accounts) => {
  const grouped = accounts.reduce((grouped, account) => {
    const group = account.type;
    if (!grouped[group]) {
      grouped[group] = {
        name: getGroupName(group),
        accounts: [],
        total: 0
      };
    }
    grouped[group].accounts.push(account);
    grouped[group].total += Number(account.balance);

    return grouped;
  }, {});

  for (const group of Object.keys(grouped)) {
    grouped[group].accounts.sort(sortByName);
  }

  return grouped;
};

export const accountOptionsForTx = (accounts) => {
  const data = accounts.reduce((acc, item) => {
    return acc.concat({
      key: item.id,
      value: item.id,
      text: item.name
    })
  }, []);
  return data;
}

export const getAccountName = (accounts, id) => {
  const account = accounts.find(acc => acc.id === id);
  return account.name;
}

export const getSortedTransactions = (transactions, value) => {
  const filteredTransactions = filterTransactionsbyDate(transactions, value);
  return filteredTransactions.slice().sort((a, b) => moment(b.date).diff(moment(a.date)));
}

export const filterTransactionsbyDate = (transactions, value) => {
  const to = (value === '7') ? moment().subtract(7, 'days') : (value === '30') ? moment().subtract(30, 'days') : (value === '1') ? 'today' : '';
  if (to === '') return transactions;
  if (to === 'today') return transactions.filter(tx =>  moment(tx.date).format('ll') === moment().format('ll'));
  return transactions.filter(item => moment(item.date) <= moment() && moment(item.date) >= to);
}

export const getReportData = (transactions, txType) => {
  const reduced = transactions.reduce((acc, { type, tags, amount }) => {
    tags ?
    tags.forEach(tag => {
      if (!acc[type]) { acc[type] = {} };
      acc[type][tag] = (acc[type][tag] || 0) + amount;
    }) : acc[type]['Others'] = amount;
    return { ...acc }
  }, {});

  return txType === 'Income' ? formatDataForReport(reduced.income) : formatDataForReport(reduced.expense);
}

function formatDataForReport(obj) {
  if(!obj) return {};
  let category = [];
  let data = []; 
  for (const [key, value] of Object.entries(obj)) {
    category.push(key);
    data.push(value);
  }
  return {category, data};
}

function getGroupName(code) {
  return GroupToTextMap[code];
}

function sortByName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};
