const gg = async () => {
  //   const endpoint = new URL('https://api.agify.io/?name=bella');
  const endpoint = new URL('http://localhost:8000/user');
  // console.log(endpoint)
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
  document.getElementById('change').innerHTML = data.message;
  //   console.log('hi');
};

document.getElementById('ff').addEventListener('click', () => {
  gg();
});
