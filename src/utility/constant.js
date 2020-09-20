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

function getGroupName(code) {
  return GroupToTextMap[code];
}

function sortByName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};
