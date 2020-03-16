// Original Data Tree //
export const apiDataTree = (state) => state.apiData || [];
export const apiDataExists = (state) => apiDataTree(state).length || false;

// Formatted Data Tree //
export const formattedDataTree = (state) => state.formattedData || {};
export const formattedDataExists = (state) => formattedDataTree(state).length || false;


export default {
  apiDataTree,
  apiDataExists,
  formattedDataTree,
  formattedDataExists
}
