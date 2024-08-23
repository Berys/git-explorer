// Type for a single GitHub user item in search results
export type GitHubUserItem = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  name: string | null;
  bio: string | null;
  email: string | null;
  location: string | null;
  site_admin: boolean;
  hireable: boolean | null;
  text_matches?: Array<{
    object_url: string;
    object_type: string | null;
    property: string;
    fragment: string;
    matches: Array<{
      text: string;
      indices: number[];
    }>;
  }>;
  blog: string | null;
  company: string | null;
  suspended_at: string | null;
};

// Type for the GitHub search users API response
export type GitHubSearchUsersResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUserItem[];
};

// Type for the entire array of repositories
export type UserRepositories = Repository[];

// Type for a single repository
type Repository = {
  id: number; // Unique identifier of the repository
  node_id: string;
  name: string; // The name of the repository
  full_name: string;
  license: License | null;
  forks: number;
  permissions: Permissions;
  owner: SimpleUser;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string | null;
  hooks_url: string;
  svn_url: string;
  homepage: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  pushed_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  allow_rebase_merge: boolean;
  temp_clone_token?: string;
  allow_squash_merge: boolean;
  allow_auto_merge: boolean;
  delete_branch_on_merge: boolean;
  allow_update_branch: boolean;
  use_squash_pr_title_as_default: boolean;
  squash_merge_commit_title: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
  squash_merge_commit_message: 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';
  merge_commit_title: 'PR_TITLE' | 'MERGE_MESSAGE';
  merge_commit_message: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
};

// Type for License
type License = {
  key: string;
  name: string;
  url: string | null;
  spdx_id: string | null;
  node_id: string;
  html_url: string;
};

// Type for Permissions
type Permissions = {
  admin: boolean;
  pull: boolean;
  push: boolean;
  triage?: boolean;
  maintain?: boolean;
};

// Type for Simple User
type SimpleUser = {
  name: string | null;
  email: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
};
