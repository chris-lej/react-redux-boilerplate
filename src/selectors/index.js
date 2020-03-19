// Original Data Tree //
export const apiDataTree = (state) => state.apiData.businesses || [];
// @TODO Make better defaults here for location lat and long
export const apiRequestLocationLat = (state) => ((state.apiData.region || {}).center || {}).latitude || 30;
export const apiRequestLocationLong = (state) => ((state.apiData.region || {}).center || {}).longitude || -97;
export const apiDataExists = (state) => apiDataTree(state).length || false;

// Formatted Data Tree //
export const formattedDataTree = (state) => state.formattedData || {};
export const formattedDataExists = (state) => formattedDataTree(state).length || false;


export default {
  apiDataTree,
  apiDataExists,
  apiRequestLocationLat,
  apiRequestLocationLong,
  formattedDataTree,
  formattedDataExists
}
