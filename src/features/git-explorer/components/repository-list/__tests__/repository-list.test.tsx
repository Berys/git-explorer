import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { RepositoryList } from '../repository-list';
import { UserRepositories } from '@api/types/api-types';

// TODO: Mock API
const mockRepositories: UserRepositories = [
  // @ts-ignore
  {
    id: 1,
    name: 'Repository One',
    description: 'Description for repository one',
  },
  // @ts-ignore
  {
    id: 2,
    name: 'Repository Two',
    description: 'Description for repository two',
  },
];

describe('RepositoryList Component', () => {
  it('should render', () => {
    render(<RepositoryList repositoriesData={mockRepositories} />);
    const repositoryList = screen.getByTestId('repository-list');
    expect(repositoryList).toBeTruthy();
  });

  it('correct number of repositories', () => {
    render(<RepositoryList repositoriesData={mockRepositories} />);
    const repositoryItem1 = screen.getByTestId('repository-item-1');
    const repositoryItem2 = screen.getByTestId('repository-item-2');

    expect(repositoryItem1).toBeTruthy();
    expect(repositoryItem2).toBeTruthy();
  });

  it('should display an empty', () => {
    render(<RepositoryList repositoriesData={[]} />);
    const emptyStateText = screen.getByTestId('empty-state');
    expect(emptyStateText).toBeTruthy();
    expect(emptyStateText.props.children).toBe('This user has no repositories');
  });
});
