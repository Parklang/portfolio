import { USER } from '@/config/user';

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
  fork: boolean;
};

export async function getLatestRepos(limit = 6): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USER.username}/repos?per_page=100&sort=pushed&direction=desc`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          Accept: 'application/vnd.github+json',
        },
      }
    );

    if (!res.ok) {
      return [];
    }

    const repos = (await res.json()) as GitHubRepo[];

    // Filter out forks, keep sorted by most recently pushed
    return repos
      .filter((repo) => !repo.fork)
      .slice(0, limit);
  } catch {
    return [];
  }
}
