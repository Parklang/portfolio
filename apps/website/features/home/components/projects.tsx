import Link from 'next/link';
import { ArrowUpRightIcon, BoxIcon, StarIcon } from 'lucide-react';

import { USER } from '@/config/user';
import { getLatestRepos } from '@/features/home/data/repos';

export async function Projects() {
  const repos = await getLatestRepos(6);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Projects
        </h2>
        <Link
          href={USER.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-4">
        {repos.length === 0 ? (
          <p className="text-sm text-muted-foreground">No repositories found.</p>
        ) : (
          repos.map((repo) => (
            <Link
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <BoxIcon className="size-5" />
              </div>

              <div className="flex-1 space-y-1 pt-1 min-w-0">
                <h3 className="flex items-center gap-1 font-medium text-foreground group-hover:underline">
                  {repo.name}
                  <ArrowUpRightIcon className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 shrink-0" />
                </h3>
                {repo.description && (
                  <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                )}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {repo.language && (
                    <span>{repo.language}</span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <StarIcon className="size-3" />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
