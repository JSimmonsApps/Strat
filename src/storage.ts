export type StrataState = {
  completedLessons: string[];
  completedPractice: string[];
  savedResources: string[];
  bookmarkedLessons: string[];
  notes: Record<string, string>;
  currentCourse: string;
  viewed: string[];
};

const KEY = 'strata-progress-v1';
const initial: StrataState = { completedLessons: [], completedPractice: [], savedResources: [], bookmarkedLessons: [], notes: {}, currentCourse: 'speak-with-confidence', viewed: [] };

export function loadState(): StrataState {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...initial, ...JSON.parse(raw) } : initial;
  } catch { return initial; }
}
export function saveState(state: StrataState) { localStorage.setItem(KEY, JSON.stringify(state)); }
export function resetState() { localStorage.removeItem(KEY); return { ...initial, completedLessons: [], completedPractice: [], savedResources: [], bookmarkedLessons: [], notes: {}, viewed: [] }; }