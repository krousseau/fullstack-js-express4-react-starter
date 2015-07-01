import * as types from '../constants/ActionTypes';

export function updatePassword(id, password) {
  return {
    type: types.UPDATE_PASSWORD,
    id,
    password
  };
}
