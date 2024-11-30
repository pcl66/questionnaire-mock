const { Random } = require('mockjs');

module.exports = [
  {
    url: '/getUserInfo',
    method: 'get',
    response: () => {
      return {
        errno: 200,
        data: {
          name: Random.cname()
        },
      };
    },
  }
]