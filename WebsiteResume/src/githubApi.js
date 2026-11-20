// Public GitHub data for the homepage GitHub Activity section.
// No tokens are used: everything here is public, unauthenticated data.
//
// - Profile + repos: GitHub REST API (60 requests/hour per visitor IP).
// - Contribution calendar: github-contributions-api.jogruber.de, a community
//   service that reads the public GitHub profile (GitHub's official calendar
//   data is only available via the GraphQL API, which requires a token).
//
// Responses are cached in localStorage for an hour so normal browsing never
// gets close to the rate limit. If a request fails, stale cached data is used
// when available.

export const GITHUB_USERNAME = "johnbidoo";
export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const CACHE_PREFIX = "gh-cache:";
const MAX_REPOS = 6;

export class RateLimitError extends Error {
  constructor() {
    super("GitHub rate limit reached");
    this.name = "RateLimitError";
  }
}

function readCache(key) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(key, data) {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ time: Date.now(), data }));
  } catch {
    // Storage full or unavailable (e.g. private mode) — caching is optional.
  }
}

async function cachedFetchJson(key, url) {
  const cached = readCache(key);
  if (cached && Date.now() - cached.time < CACHE_TTL_MS) {
    return cached.data;
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      const rateLimited =
        (res.status === 403 || res.status === 429) &&
        res.headers.get("x-ratelimit-remaining") === "0";
      throw rateLimited ? new RateLimitError() : new Error(`Request failed: ${res.status}`);
    }

    const data = await res.json();
    writeCache(key, data);
    return data;
  } catch (error) {
    if (cached) return cached.data; // fall back to stale data
    throw error;
  }
}

export function fetchProfile() {
  return cachedFetchJson("profile", `https://api.github.com/users/${GITHUB_USERNAME}`);
}

export async function fetchRecentRepos() {
  const repos = await cachedFetchJson(
    "repos",
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`
  );

  return repos
    .filter(
      (repo) =>
        !repo.fork &&
        // Skip the profile README repo (johnbidoo/johnbidoo)
        repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase()
    )
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, MAX_REPOS);
}

export function fetchContributions() {
  return cachedFetchJson(
    "contributions",
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
  );
}
