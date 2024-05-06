import { tracks } from '@/lib/tracks';
import * as d3 from 'd3';
import type { Milestone, TrackMilestoneMap } from '../lib/constants';
import { MILESTONES, categoryColorScale, trackIds } from '../lib/constants';
import type { TrackId } from '../lib/tracks';

const WIDTH = 400;
const arcMilestones = MILESTONES.slice(1); // we'll draw the '0' milestone with a circle, not an arc.

type Props = {
  milestoneByTrack: TrackMilestoneMap;
  focusedTrackId: TrackId;
  handleTrackMilestoneChange: (trackId: TrackId, milestone: Milestone) => void;
};

export function NightingaleChart({
  milestoneByTrack,
  focusedTrackId,
  handleTrackMilestoneChange,
}: Props) {
  const radiusScale = d3
    .scaleBand()
    .domain(arcMilestones.map(String))
    .range([0.15 * WIDTH, 0.45 * WIDTH])
    .paddingInner(0.1);

  const milestonesArc = d3
    .arc<d3.NumberValue>()
    .innerRadius((milestone) => radiusScale(String(milestone)) ?? 0)
    .outerRadius((milestone) => (radiusScale(String(milestone)) ?? 0) + radiusScale.bandwidth())
    .startAngle(-Math.PI / trackIds.length)
    .endAngle(Math.PI / trackIds.length)
    .padAngle(Math.PI / 200)
    .padRadius(0.45 * WIDTH)
    .cornerRadius(2);

  const currentMilestoneId = milestoneByTrack[focusedTrackId];

  return (
    <figure>
      <style jsx>{`
        figure {
          margin: 0;
        }
        svg {
          width: ${WIDTH}px;
          height: ${WIDTH}px;
        }
        .track-milestone {
          fill: #eee;
          cursor: pointer;
        }
        .track-milestone-current,
        .track-milestone:hover {
          stroke: #000;
          stroke-width: 4px;
          stroke-linejoin: round;
        }
      `}</style>
      <svg>
        <g transform={`translate(${WIDTH / 2},${WIDTH / 2}) rotate(-33.75)`}>
          {trackIds.map((trackId, index) => {
            const isCurrentTrack = trackId === focusedTrackId;
            return (
              <g key={trackId} transform={`rotate(${(index * 360) / trackIds.length})`}>
                {arcMilestones.map((milestone) => {
                  const isCurrentMilestone = isCurrentTrack && milestone === currentMilestoneId;
                  const isMet = milestoneByTrack[trackId] >= milestone || milestone === 0;
                  return (
                    <path
                      key={milestone}
                      className={
                        'track-milestone ' +
                        (isMet ? 'is-met ' : ' ') +
                        (isCurrentMilestone ? 'track-milestone-current' : '')
                      }
                      onClick={() => handleTrackMilestoneChange(trackId, milestone)}
                      d={milestonesArc(milestone) ?? undefined}
                      style={{
                        fill: isMet ? categoryColorScale(tracks[trackId].category) : undefined,
                      }}
                    />
                  );
                })}
                <circle
                  r='8'
                  cx='0'
                  cy='-50'
                  style={{ fill: categoryColorScale(tracks[trackId].category) }}
                  className={
                    'track-milestone ' +
                    (isCurrentTrack && !currentMilestoneId ? 'track-milestone-current' : '')
                  }
                  onClick={() => handleTrackMilestoneChange(trackId, 0)}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </figure>
  );
}
