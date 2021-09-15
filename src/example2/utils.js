export function fetchAsJson(url) {
  const headers = new Headers();
  // headers.set('Authorization', 'Basic ' + btoa('serbanghita:***'));

  return fetch(url,
      {method: 'GET', headers: headers}
  )
  .then(res => res.json());
}
