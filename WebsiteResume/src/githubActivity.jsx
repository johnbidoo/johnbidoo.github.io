import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { LuBookMarked, LuUsers, LuActivity } from "react-icons/lu";

import {
  GITHUB_PROFILE_URL,
  RateLimitError,
  fetchProfile,
  fetchRecentRepos,
  fetchContributions,
} from "./githubApi";
import ContributionCalendar from "./contributionCalendar";
import RepoCard from "./repoCard";
import "./styles/github.css";

// Runs an async loader once and tracks loading / success / error.
// `loader` must be a stable (module-level) function.
function useAsync(loader) {
  const [state, setState] = useState({ status: "loading", data: null, error: null });

  useEffect(() => {
    let active = true;
    loader()
      .then((data) => active && setState({ status: "success", data, error: null }))
      .catch((error) => active && setState({ status: "error", data: null, error }));
    return () => {
      active = false;
    };
  }, [loader]);

  return state;
}

function errorMessage(error) {
  return error instanceof RateLimitError
    ? "GitHub's hourly request limit has been reached. Please check back a little later."
    : "GitHub data couldn't be loaded right now.";
}

function StatCard({ icon: Icon, value, label, loading }) {
  return (
    <div className="github-stat">
      <Icon className="github-stat-icon" aria-hidden="true" focusable="false" />
      {loading ? (
        <span className="skeleton skeleton-value" aria-hidden="true" />
      ) : (
        <span className="github-stat-value">{value}</span>
      )}
      <span className="github-stat-label">{label}</span>
    </div>
  );
}

function GithubActivity() {
  const profile = useAsync(fetchProfile);
  const repos = useAsync(fetchRecentRepos);
  const contributions = useAsync(fetchContributions);

  const profileLoading = profile.status === "loading";
  const contributionsLoading = contributions.status === "loading";
  const showContributions = contributions.status !== "error";
  const allFailed =
    profile.status === "error" && repos.status === "error" && contributions.status === "error";

  return (
    <section className="github-section" aria-labelledby="github-title" aria-busy={profileLoading}>
      <h2 id="github-title" className="github-title">GitHub Activity</h2>
      <p className="github-subtitle">My coding journey, live from GitHub.</p>

      <div className="github-container">
        {allFailed ? (
          <p className="github-error" role="status">{errorMessage(profile.error)}</p>
        ) : (
          <>
            {/* Stats */}
            {profile.status !== "error" && (
              <div className="github-stats">
                <StatCard
                  icon={LuBookMarked}
                  label="Public repositories"
                  value={profile.data?.public_repos}
                  loading={profileLoading}
                />
                <StatCard
                  icon={LuUsers}
                  label="Followers"
                  value={profile.data?.followers}
                  loading={profileLoading}
                />
                {showContributions && (
                  <StatCard
                    icon={LuActivity}
                    label="Contributions in the last year"
                    value={contributions.data?.total?.lastYear}
                    loading={contributionsLoading}
                  />
                )}
              </div>
            )}

            {/* Contribution calendar */}
            {showContributions && (
              <div className="github-card">
                <h3 className="github-card-title">Contributions</h3>
                {contributionsLoading ? (
                  <div className="skeleton skeleton-calendar" aria-hidden="true" />
                ) : (
                  <ContributionCalendar
                    contributions={contributions.data.contributions}
                    total={contributions.data.total?.lastYear ?? 0}
                  />
                )}
              </div>
            )}

            {/* Recent repositories */}
            <div className="github-repos">
              <h3 className="github-card-title">Recently Updated Repositories</h3>

              {repos.status === "error" && (
                <p className="github-error" role="status">{errorMessage(repos.error)}</p>
              )}

              {repos.status === "loading" && (
                <div className="repo-grid" aria-hidden="true">
                  {[0, 1].map((i) => (
                    <div key={i} className="skeleton skeleton-repo" />
                  ))}
                </div>
              )}

              {repos.status === "success" &&
                (repos.data.length ? (
                  <div className="repo-grid">
                    {repos.data.map((repo) => (
                      <RepoCard key={repo.id} repo={repo} />
                    ))}
                  </div>
                ) : (
                  <p className="github-empty">No public repositories yet.</p>
                ))}
            </div>
          </>
        )}

        <a
          className="github-button"
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub aria-hidden="true" focusable="false" />
          View GitHub Profile
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}

export default GithubActivity;
