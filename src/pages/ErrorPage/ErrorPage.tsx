import { useRouteError } from "react-router-dom";
import React from 'react';

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();

  if (!error) {
    return null;
  }

  console.error(error);

  return (
      <div>
          Oops! Sorry, an unexpected error has occurred.
          {error.statusText || error.message}
      </div>
  );
};

export default ErrorPage;