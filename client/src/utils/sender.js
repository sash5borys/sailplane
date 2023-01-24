const server = 'http://localhost:8080/api/v1';

const sender = async (url, method = 'GET', data = null, token = null) => {
  const res = await fetch(server + url, {
    method: method,
    ...(data && {body: JSON.stringify(data)}),
    headers: {
      'Content-Type': 'application/json',
      ...(token && {authorization: `Bearer ${token}}`})
    }
  });
  return await res.json();
};

export default sender;
