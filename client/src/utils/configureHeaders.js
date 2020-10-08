const configureHeaders = (token) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (token) {
    headers.set('x-auth-token', token);
  }

  return headers;
};

export default configureHeaders;
