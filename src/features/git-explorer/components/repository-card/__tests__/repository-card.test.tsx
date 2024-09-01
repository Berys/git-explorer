import React from 'react';
import { render } from '@testing-library/react-native';
import { Repository } from '@api/types/api-types';
import RepositoryCard from '../repository-card';

describe('RepositoryCard', () => {
  // TODO: Mock API
  // @ts-ignore
  const mockRepository: Repository = {
    id: 1,
    name: 'Test Repo',
    description: 'A test repository',
    stargazers_count: 42,
  };

  it('renders the repository name', () => {
    const { getByTestId } = render(
      <RepositoryCard repository={mockRepository} />,
    );
    const nameElement = getByTestId('repository-name');
    expect(nameElement.props.children).toBe('Test Repo');
  });

  it('renders the repository description', () => {
    const { getByTestId } = render(
      <RepositoryCard repository={mockRepository} />,
    );
    const descriptionElement = getByTestId('repository-description');
    expect(descriptionElement.props.children).toBe('A test repository');
  });

  it('renders the repository stars count', () => {
    const { getByTestId } = render(
      <RepositoryCard repository={mockRepository} />,
    );
    const starsElement = getByTestId('repository-stars');
    expect(starsElement.props.children).toBe(42);
  });

  it('handles missing description correctly', () => {
    const repositoryWithoutDescription: Repository = {
      ...mockRepository,
      description: null,
    };
    const { queryByTestId } = render(
      <RepositoryCard repository={repositoryWithoutDescription} />,
    );
    expect(queryByTestId('repository-description')).toBeNull();
  });
});
