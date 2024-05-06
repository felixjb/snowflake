import * as d3 from 'd3';
import { useEffect } from 'react';
import type { TrackMilestoneMap } from '../lib/constants';
import {
  MAX_LEVEL,
  POINTS_TO_LEVELS,
  categoryColorScale,
  categoryPointsFromMilestoneMap,
} from '../lib/constants';

const MARGINS = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 10,
};
const HEIGHT = 150;
const WIDTH = 550;

function rightRoundedRect({
  x,
  y,
  width,
  height,
  radius,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
}) {
  return `M${x},${y}h${width - radius}a${radius},${radius} 0 0 1 ${radius},${radius}v${
    height - 2 * radius
  }a${radius},${radius} 0 0 1 ${-radius},${radius}h${radius - width}z`;
}

type Props = {
  milestoneByTrack: TrackMilestoneMap;
};

export function LevelThermometer({ milestoneByTrack }: Props) {
  const pointScale = d3
    .scaleLinear()
    .domain([0, MAX_LEVEL])
    .rangeRound([0, WIDTH - MARGINS.left - MARGINS.right]);

  const topAxisFn = d3
    .axisTop(pointScale)
    .scale(pointScale)
    .tickValues(Object.keys(POINTS_TO_LEVELS).map(Number))
    .tickFormat((points) => POINTS_TO_LEVELS[Number(points)]);

  const bottomAxisFn = d3
    .axisBottom(pointScale)
    .scale(pointScale)
    .tickValues(Object.keys(POINTS_TO_LEVELS).map(Number));

  let topAxis: SVGGElement;
  let bottomAxis: SVGGElement;

  const categoryPoints = categoryPointsFromMilestoneMap(milestoneByTrack);
  let lastCategoryIndex = 0;
  categoryPoints.forEach((categoryPoint, index) => {
    if (categoryPoint.points) lastCategoryIndex = index;
  });
  let cumulativePoints = 0;

  useEffect(() => {
    d3.select(topAxis)
      .call(topAxisFn)
      .selectAll('text')
      .attr('y', 0)
      .attr('x', -25)
      .attr('transform', 'rotate(90)')
      .attr('dy', '.35em')
      .style('font-size', '12px')
      .style('text-anchor', 'start');
    d3.select(bottomAxis)
      .call(bottomAxisFn)
      .selectAll('text')
      .attr('y', 0)
      .attr('x', 10)
      .attr('transform', 'rotate(90)')
      .attr('dy', '.35em')
      .style('font-size', '12px')
      .style('text-anchor', 'start');
  });

  return (
    <figure>
      <style jsx>{`
        figure {
          margin: 0 0 0 -10px;
        }
        svg {
          width: ${WIDTH}px;
          height: ${HEIGHT + 10}px;
        }
      `}</style>
      <svg>
        <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>
          {categoryPoints.map((categoryPoint, index) => {
            const x = pointScale(cumulativePoints);
            const width = pointScale(cumulativePoints + categoryPoint.points) - x;
            cumulativePoints += categoryPoint.points;
            return index !== lastCategoryIndex ? (
              <rect
                key={categoryPoint.categoryId}
                x={x}
                y={0}
                width={width}
                height={HEIGHT - MARGINS.top - MARGINS.bottom}
                style={{
                  fill: categoryColorScale(categoryPoint.categoryId),
                  borderRight: '1px solid #000',
                }}
              />
            ) : (
              <path
                key={categoryPoint.categoryId}
                d={rightRoundedRect({
                  x,
                  y: 0,
                  width,
                  height: HEIGHT - MARGINS.top - MARGINS.bottom,
                  radius: 3,
                })}
                style={{ fill: categoryColorScale(categoryPoint.categoryId) }}
              />
            );
          })}
          <g
            ref={(ref) => {
              if (ref) topAxis = ref;
            }}
            className='top-axis'
            transform={`translate(0, -2)`}
          />
          <g
            ref={(ref) => {
              if (ref) bottomAxis = ref;
            }}
            className='bottom-axis'
            transform={`translate(0,${HEIGHT - MARGINS.top - MARGINS.bottom + 1})`}
          />
        </g>
      </svg>
    </figure>
  );
}
