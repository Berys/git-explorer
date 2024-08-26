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
  // For animation purposes
  await delay(2000);
  const response = await axiosClient.get<GitHubSearchUsersResponse>(
    `${GITHUB_API_URL}/search/users`,
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
  // For animation purposes
  await delay(2000);
  const response = await axiosClient.get<UserRepositories>(
    `${GITHUB_API_URL}/users/${username}/repos`,
  );
  return response.data;
};
