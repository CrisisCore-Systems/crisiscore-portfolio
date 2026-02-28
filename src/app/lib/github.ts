export type GitHubRepo = {
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string;
  created_at: string;
  updated_at: string;
};

export type GitHubUser = {
  login: string;
  html_url: string;
  followers: number;
  public_repos: number;
};

const UA = { "User-Agent": "crisiscore-portfolio" };

async function gh<T>(url: string): Promise<T | null> {
  try {
    const r = await fetch(url, {
      headers: UA,
      next: { revalidate: 3600 },
    });
    if (!r.ok) return null;
    return (await r.json()) as T;
  } catch {
    return null;
  }
}

export async function getGitHubUser(username: string) {
  return gh<GitHubUser>(`https://api.github.com/users/${username}`);
}

export async function getRepo(owner: string, repo: string) {
  return gh<GitHubRepo>(`https://api.github.com/repos/${owner}/${repo}`);
}
