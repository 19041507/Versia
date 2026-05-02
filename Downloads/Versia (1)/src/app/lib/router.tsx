/**
 * Custom hash-based router for Figma Make preview (Vite environment).
 * Provides the same API surface as react-router and next/navigation,
 * enabling pages to work in both environments:
 *  - Here (Vite/Figma Make): hash-based SPA routing via window.location.hash
 *  - Production (Next.js): real file-system routing via /app directory
 */

import {
  useState,
  useEffect,
  useContext,
  createContext,
  type ReactNode,
} from 'react';

interface RouterContextValue {
  currentPath: string;
  navigate: (path: string, opts?: { replace?: boolean }) => void;
}

export const RouterContext = createContext<RouterContextValue>({
  currentPath: '/',
  navigate: () => {},
});

function getPathFromHash(): string {
  if (typeof window === 'undefined') return '/';
  const hash = window.location.hash.slice(1);
  return hash || '/';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(getPathFromHash);

  useEffect(() => {
    const onHashChange = () => setCurrentPath(getPathFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (path: string, opts?: { replace?: boolean }) => {
    const hash = `#${path}`;
    if (opts?.replace) {
      window.location.replace(hash);
    } else {
      window.location.hash = path;
    }
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

/** Equivalent to Next.js useRouter / react-router useNavigate */
export function useNavigate() {
  const { navigate } = useContext(RouterContext);
  return navigate;
}

/**
 * Extracts dynamic params from the current hash path.
 * e.g. /#/course/3  → { id: '3' }
 */
export function useParams(): Record<string, string> {
  const { currentPath } = useContext(RouterContext);
  const parts = currentPath.split('/').filter(Boolean);
  const lastSegment = parts[parts.length - 1] ?? '1';
  return { id: lastSegment };
}

/** Drop-in replacement for next/link <Link> and react-router <Link> */
export function Link({
  href,
  to,
  children,
  className,
  style,
  onClick,
  ...rest
}: {
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: unknown;
}) {
  const { navigate } = useContext(RouterContext);
  const dest = href ?? to ?? '/';

  return (
    <a
      href={`#${dest}`}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        navigate(dest);
        onClick?.();
      }}
      {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </a>
  );
}