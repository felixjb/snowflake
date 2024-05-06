import * as d3 from 'd3';
import { TrackId, TrackIdEnum, tracks } from './tracks';

export const MILESTONES = [0, 1, 2, 3, 4, 5] as const;

export type Milestone = (typeof MILESTONES)[number];

export type TrackMilestoneMap = Record<TrackId, Milestone>;

const milestoneToPoints = (milestone: Milestone): number => {
  const map = {
    0: 0,
    1: 1,
    2: 3,
    3: 6,
    4: 12,
    5: 20,
  };
  return map[milestone] ?? 0;
};

export const POINTS_TO_LEVELS: Record<number, string> = {
  0: '1.1',
  5: '1.2',
  11: '1.3',
  17: '2.1',
  23: '2.2',
  29: '2.3',
  36: '3.1',
  43: '3.2',
  50: '3.3',
  58: '4.1',
  66: '4.2',
  74: '4.3',
  90: '5.1',
  110: '5.2',
  135: '5.3',
};

export const MAX_LEVEL = 135;

export const trackIds: TrackId[] = Object.keys(TrackIdEnum) as TrackId[];

export const categoryIds: Set<string> = trackIds.reduce((categories, trackId) => {
  categories.add(tracks[trackId].category);
  return categories;
}, new Set<string>());

export const categoryPointsFromMilestoneMap = (
  milestoneMap: TrackMilestoneMap,
): {
  categoryId: string;
  points: number;
}[] => {
  const pointsByCategory = new Map<string, number>();
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    const currentPoints = pointsByCategory.get(categoryId) ?? 0;
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone));
  });
  return Array.from(categoryIds.values()).map((categoryId) => ({
    categoryId,
    points: pointsByCategory.get(categoryId) ?? 0,
  }));
};

export const totalPointsFromMilestoneMap = (milestoneMap: TrackMilestoneMap): number =>
  trackIds
    .map((trackId) => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0);

export const TITLES = [
  { label: 'Engineer I', minPoints: 0, maxPoints: 16 },
  { label: 'Engineer II', minPoints: 17, maxPoints: 35 },
  { label: 'Senior Engineer', minPoints: 36, maxPoints: 57 },
  { label: 'Group Lead', minPoints: 36, maxPoints: 57 },
  { label: 'Staff Engineer', minPoints: 58, maxPoints: 89 },
  { label: 'Senior Group Lead', minPoints: 58, maxPoints: 89 },
  { label: 'Principal Engineer', minPoints: 90, maxPoints: Infinity },
  { label: 'Director of Engineering', minPoints: 90, maxPoints: Infinity },
];

export const eligibleTitles = (milestoneMap: TrackMilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return TITLES.filter(
    (title) => totalPoints >= title.minPoints && totalPoints <= title.maxPoints,
  ).map((title) => title.label);
};

const COLORS = ['#00abc2', '#428af6', '#e1439f', '#e54552'];

export const categoryColorScale = d3.scaleOrdinal<string>().domain(categoryIds).range(COLORS);
