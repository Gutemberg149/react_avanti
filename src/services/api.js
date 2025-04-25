const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export async function fetchGitHubProfile(userName) {
  const url = `https://api.github.com/users/${userName}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${API_KEY}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    // Handle error que não são respostas 200
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const profileData = await response.json();
    return profileData;
  } catch (error) {
    console.error("Failed to fetch GitHub profile:", error);
    throw error;
  }
}
