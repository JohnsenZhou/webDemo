import request from '../utils/request';

export async function fetch() {
  return request(`api/api/catalogs?client=1`);
}

export async function push(values) {
  return request('api/api/catalogs', {
    method: "POST",
    body: JSON.stringify(values)
  });
};