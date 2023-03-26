
fetch('https://hunome.atlassian.net/rest/api/3/issue/{issueIdOrKey}', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'jack@hunome.com:ATATT3xFfGF0FKrc4VH9edDX6AabZpJ8ELPPiyXDSDs-o1ybDw0YPBZUeZ3ywKtA70W3AhmthiDjays043LUksebvzA3KxTRxWrVNhiasG_Mf66VkqFgHb-MvHkcFAwJmQAaBdFHQSzDMZxl9JmxwOf3pBpH5wKkdTGBTSG1678lvJm6B9qNfAA=6CE20224'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));