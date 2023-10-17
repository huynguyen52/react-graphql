import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_ALL_EMPLOYEES = gql`
  query GetAllEmployees {
    getAllEmployees {
      id
      firstName
      lastName
    }
  }
`;

const Test = () => {
  const { data, loading } = useQuery(GET_ALL_EMPLOYEES);

  if (loading) {
    return <div>Loading....</div>;
  }
  const { getAllEmployees } = data;

  return (
    <div>
      {getAllEmployees.map((empl) => (
        <p key={empl.id}>{empl.firstName}</p>
      ))}
    </div>
  );
};

export default Test;
