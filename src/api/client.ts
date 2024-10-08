import axios from 'axios';
import { GitHubSearchUsersResponse, UserRepositories } from './types/api-types';
import { delay } from '@utils/dev-utils';

const GITHUB_API_URL = 'https://api.github.com';

export const axiosClient = axios.create({
  baseURL: GITHUB_API_URL,
  timeout: 10000,
});

export const searchGitHubUsers = async (
  username: string,
): Promise<GitHubSearchUsersResponse> => {
  await delay(2000); // For animation purposes
  const response = await axiosClient.get<GitHubSearchUsersResponse>(
    '/search/users',
    {
      params: {
        q: username,
        per_page: 5,
      },
    },
  );
  return response.data;
};
export const searchGitHubUserRepos = async (
  username: string,
): Promise<UserRepositories> => {
  await delay(2000); // For animation purposes
  const response = await axiosClient.get<UserRepositories>(
    `/users/${username}/repos`,
  );

  return response.data;
};
