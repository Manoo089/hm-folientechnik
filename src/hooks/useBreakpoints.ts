import { useMediaQuery } from './useMediaQuery';

const BREAKPOINT_TABLET = '768px';
const BREAKPOINT_DESKTOP = '1365px';

const MEDIA_QUERIES = {
  isMobile: `(max-width: calc(${BREAKPOINT_TABLET} - 1px)`,
  isTablet: `(min-width: ${BREAKPOINT_TABLET}) and (max-width: ${BREAKPOINT_DESKTOP})`,
  isDesktop: `(min-width: ${BREAKPOINT_DESKTOP})`,
} as const;

export type MediaQueryKey = keyof typeof MEDIA_QUERIES;

export type Breakpoints = Record<MediaQueryKey, boolean>;

export function useBreakpoints(initialValue?: Partial<Breakpoints>): Breakpoints {
  const isMobile = useMediaQuery(MEDIA_QUERIES.isMobile, initialValue?.isMobile);
  const isTablet = useMediaQuery(MEDIA_QUERIES.isTablet, initialValue?.isTablet);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.isDesktop, initialValue?.isDesktop);

  return { isMobile, isTablet, isDesktop };
}
