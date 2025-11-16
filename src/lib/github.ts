import { Project } from "@/data/projects";

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
}

export async function fetchGitHubRepos(username: string): Promise<Project[]> {
  const targetRepos = ["finai-hackops", "gen-ai-model"];
  
  try {
    const repoPromises = targetRepos.map(repoName =>
      fetch(`https://api.github.com/repos/${username}/${repoName}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
    );

    const responses = await Promise.all(repoPromises);
    const repos: GitHubRepo[] = await Promise.all(
      responses
        .filter(response => response.ok)
        .map(response => response.json())
    );

    return repos.map((repo) => ({
      title: repo.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: repo.description || "A project built with passion and code.",
      tech: repo.topics.length > 0 ? repo.topics : ["JavaScript"],
      repoUrl: repo.html_url,
      demoUrl: repo.homepage || undefined,
      featured: repo.stargazers_count > 0,
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
