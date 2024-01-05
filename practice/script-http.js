import http from 'k6/http';

export default function () {
  const response = http.get('https://test-api.k6.io/public/crocodiles/');
  const crocs = JSON.parse(response.body);
  console.log(crocs)
  crocs.forEach((croc) => {
    http.get(`https://test-api.k6.io/public/crocodiles/${croc['id']}/`);
  });
}