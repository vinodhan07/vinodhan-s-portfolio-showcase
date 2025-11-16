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
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.name.includes("dotfiles") && !repo.name.includes("config"))
      .slice(0, 6)
      .map((repo) => ({
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
