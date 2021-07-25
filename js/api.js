const GET_URL = 'https://main-shop-fake-server.herokuapp.com/db'

export const getData = (errMessage) => (
  fetch(GET_URL)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('ALL IS BAD')
  })
  .then(res => res.products)
  .catch(() => errMessage('red', 'ничено не загрузилось =(('))
)

