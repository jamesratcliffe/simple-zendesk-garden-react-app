let client;

if (typeof ZAFClient === 'undefined') {
  throw new Error('ZAFClient cannot run outside Zendesk');
} else {
  client = ZAFClient.init();
}

const get = async (lookup) => {
  return await client.get(lookup);
};

const getCurrentUserName = async () => {
  const data = await client.get('currentUser.name');
  return data['currentUser.name'];
};

exports.get = get;
exports.getCurrentUserName = getCurrentUserName;