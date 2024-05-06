import type { TrackMilestoneMap } from '../lib/constants';
import { MAX_LEVEL, POINTS_TO_LEVELS, totalPointsFromMilestoneMap } from '../lib/constants';

function getCurrentLevel(totalPoints: number): string {
  let currentLevel: string;
  let pointsForCurrentLevel = totalPoints;
  while (!(currentLevel = POINTS_TO_LEVELS[pointsForCurrentLevel])) {
    pointsForCurrentLevel--;
  }
  return currentLevel;
}

function getPointsToNextLevel(totalPoints: number): number {
  let pointsToNextLevel = 1;
  while (!POINTS_TO_LEVELS[totalPoints + pointsToNextLevel]) {
    pointsToNextLevel++;
    if (pointsToNextLevel > MAX_LEVEL) {
      break;
    }
  }
  return pointsToNextLevel;
}

type Props = {
  milestoneByTrack: TrackMilestoneMap;
};

export function PointSummaries({ milestoneByTrack }: Props) {
  const totalPoints = totalPointsFromMilestoneMap(milestoneByTrack);
  const currentLevel = getCurrentLevel(totalPoints);
  const pointsToNextLevel = getPointsToNextLevel(totalPoints);
  const pointSummary = [
    {
      label: 'Current level',
      value: currentLevel,
    },
    {
      label: 'Total points',
      value: totalPoints,
    },
    {
      label: 'Points to next level',
      value: pointsToNextLevel > MAX_LEVEL ? 'N/A' : pointsToNextLevel,
    },
  ];

  return (
    <table>
      <style jsx>{`
        table {
          border-spacing: 3px;
          margin-bottom: 20px;
          margin-left: -3px;
        }
        .point-summary-label {
          font-size: 12px;
          text-align: center;
          font-weight: normal;
          width: 120px;
        }
        .point-summary-value {
          width: 120px;
          background: #eee;
          font-size: 24px;
          font-weight: bold;
          line-height: 50px;
          border-radius: 2px;
          text-align: center;
        }
      `}</style>
      <tbody>
        <tr>
          {pointSummary.map(({ label }, index) => (
            <th key={index} className='point-summary-label'>
              {label}
            </th>
          ))}
        </tr>
        <tr>
          {pointSummary.map(({ value }, index) => (
            <td key={index} className='point-summary-value'>
              {value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
