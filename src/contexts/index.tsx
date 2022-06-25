import React from 'react';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from '../lib/apollo';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <RouterProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </RouterProvider>
  );
};

export default AppProvider;
