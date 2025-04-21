import React from 'react';

import RouterApp from './router';
import { AuthProvider } from './Context/AuthProvider';

function App() {

  return (
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
  );
}

export default App;
