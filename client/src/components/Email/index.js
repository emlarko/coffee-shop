import * as React from 'react';
import { Html } from '@react-email/html';


export const Email = ({ name, subject, query }) => {
  return (
    <Html lang="en">
      <div>{subject}</div>
      <div>{name}</div>
      <div>{query}</div>
    </Html>
  );
};