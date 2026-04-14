import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BookOpen, Github, MapPin, Users } from "lucide-react";

const GITHUB_USERNAME = "Sonal-Vishwakarma";

type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  location: string | null;
  followers: number;
  following: number;
  public_repos: number;
};

const GitHubSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { signal: controller.signal }
        );
        if (!userRes.ok) throw new Error("Failed to load GitHub data");
        const userData: GithubUser = await userRes.json();
        setUser(userData);
      } catch (e) {
        if ((e as Error).name !== "AbortError") {
          setError("Could not load GitHub profile. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-widest text-sm">
            OPEN SOURCE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Live snapshot of my public work, contributions, and repositories.
          </p>
        </motion.div>

        {error && (
          <div className="text-center text-muted-foreground glass-card p-6 max-w-xl mx-auto">
            {error}
          </div>
        )}

        {!error && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile card */}
            <motion.div
              className="glass-card p-8 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {loading || !user ? (
                <div className="animate-pulse space-y-4">
                  <div className="w-28 h-28 rounded-full bg-muted mx-auto" />
                  <div className="h-5 bg-muted rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
                  <div className="h-20 bg-muted rounded" />
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <motion.img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-28 h-28 rounded-full border-2 border-primary/50 mb-4"
                    whileHover={{ scale: 1.05 }}
                  />
                  <h3 className="text-xl font-bold">{user.name || user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    @{user.login}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  {user.bio && (
                    <p className="text-sm text-muted-foreground mt-3">
                      {user.bio}
                    </p>
                  )}
                  {user.location && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-3">
                      <MapPin className="w-4 h-4" />
                      {user.location}
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-4 w-full mt-6 pt-6 border-t border-border">
                    <Stat
                      icon={<BookOpen className="w-4 h-4" />}
                      label="Repos"
                      value={user.public_repos}
                    />
                    <Stat
                      icon={<Users className="w-4 h-4" />}
                      label="Followers"
                      value={user.followers}
                    />
                    <Stat
                      icon={<Users className="w-4 h-4" />}
                      label="Following"
                      value={user.following}
                    />
                  </div>

                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub Profile
                  </a>
                </div>
              )}
            </motion.div>

            {/* Stats + contribution graph */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold text-muted-foreground tracking-widest mb-4">
                  CONTRIBUTION GRAPH
                </h3>
                <img
                  src={`https://ghchart.rshah.org/4f9cf9/${GITHUB_USERNAME}`}
                  alt={`${GITHUB_USERNAME} contribution graph`}
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-4 flex items-center justify-center">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=4f9cf9&icon_color=a855f7&text_color=a1a1aa`}
                    alt="GitHub stats"
                    className="w-full max-w-md"
                    loading="lazy"
                  />
                </div>
                <div className="glass-card p-4 flex items-center justify-center">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=4f9cf9&text_color=a1a1aa`}
                    alt="Top languages"
                    className="w-full max-w-md"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};

const Stat = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) => (
  <div className="flex flex-col items-center">
    <div className="text-primary mb-1">{icon}</div>
    <div className="text-lg font-bold">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

export default GitHubSection;
