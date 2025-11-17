import { Project } from "@/data/projects";

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  languages_url: string;
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

    // Fetch languages for each repo
    const reposWithLanguages = await Promise.all(
      repos
        .filter((repo) => !repo.name.includes("dotfiles") && !repo.name.includes("config"))
        .slice(0, 6)
        .map(async (repo) => {
          let languages: string[] = [];
          
          try {
            const langResponse = await fetch(repo.languages_url, {
              headers: {
                Accept: "application/vnd.github.v3+json",
              },
            });
            
            if (langResponse.ok) {
              const langData = await langResponse.json();
              languages = Object.keys(langData);
            }
          } catch (error) {
            console.error(`Error fetching languages for ${repo.name}:`, error);
          }

          // Use topics if available, otherwise use languages, fallback to ["JavaScript"]
          const tech = repo.topics.length > 0 
            ? repo.topics 
            : languages.length > 0 
            ? languages 
            : ["JavaScript"];

          return {
            title: repo.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
            description: repo.description || "A project built with passion and code.",
            tech,
            repoUrl: repo.html_url,
            demoUrl: repo.homepage || undefined,
            featured: repo.stargazers_count > 0,
          };
        })
    );

    return reposWithLanguages;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
