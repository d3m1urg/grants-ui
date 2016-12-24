export const ADD_RESOURCE = 'ADD_RESOURCE';
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE';
export const LIST_RESOURCES = 'LIST_RESOURCES';
export const GET_RESOURCE = 'GET_RESOURCE';
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE';

export function addResource(schema) {
  return {
    type: ADD_RESOURCE,
    schema,
  }
}

export function removeResource(name) {
  return {
    type: REMOVE_RESOURCE,
    name,
  }
}

export function listResources() {
  return {
    type: LIST_RESOURCES,
  }
}

export function getResource(name) {
  return {
    type: GET_RESOURCE,
    name,
  }
}

export function updateResource(schema) {
  return {
    type: UPDATE_RESOURCE,
    schema,
  }
}
