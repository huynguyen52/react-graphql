import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Dog, { GET_DOG_QUERY } from '..';

// const mocks = []; // We'll fill this in nex

const mocks = [
  {
    request: {
      query: GET_DOG_QUERY,
      variables: {
        name: 'Alice',
      },
    },
    result: {
      data: {
        dog: { id: '1', name: 'Buck', breed: 'bulldog' },
      },
    },
  },
];

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Dog name="Alice" />
    </MockedProvider>,
  );
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Buck is a bulldog')).toBeInTheDocument();
});
