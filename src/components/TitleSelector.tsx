import type { TrackMilestoneMap } from '../lib/constants';
import { eligibleTitles } from '../lib/constants';

type Props = {
  milestoneByTrack: TrackMilestoneMap;
  currentTitle: string;
  setTitle: (title: string) => void;
};

export function TitleSelector({ milestoneByTrack, currentTitle, setTitle }: Props) {
  const titles = eligibleTitles(milestoneByTrack);
  return (
    <select value={currentTitle} onChange={(event) => setTitle(event.target.value)}>
      <style jsx>{`
        select {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}</style>
      {titles.map((title) => (
        <option key={title}>{title}</option>
      ))}
    </select>
  );
}
