// Whitelisted Businesses //
// searchCriteria = prenatal-yoga
const whiteListedBusinesses = {
  prenatal_yoga: [
    'z1iITt6iaqyH7PhqCLIlQQ',
    '6WhNEgyg4Q7oMRvlJG_NAA',
    'KgjQ7ke0LrYG-4xsaxZbrw',
    '1OG7BC2gRND_p17_sm0Ojg',
    '9FD3StiLLXokTuvMSYQE7w',
    'hO6aaV9gsTm3WqckEa6C_Q',
    'cN9DaM_o1aE-qlN1_d6CuQ',
    'MKln3w_MqGYCCL2jWMgcig',
    'Nmm3trA6CvXYDJRY2nt_Gw',
    'RArNs8HkZWHV46F2UBQTGQ',
    'Kcw5Aa7Ful0JYEtuR0ziCw',
    'msE0rGXOnHGYo_7letF-oQ'
  ]
};

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
