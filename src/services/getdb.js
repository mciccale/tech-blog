const URL = 'http://localhost:3001/posts'

const getAll = () => {
  fetch(URL)
    .then(response => response.json())
    .then(data => data)
}

export default getAll
