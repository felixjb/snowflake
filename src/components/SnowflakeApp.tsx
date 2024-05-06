import { useEffect, useState } from 'react';
import type { Milestone, TrackMilestoneMap } from '../lib/constants';
import { eligibleTitles, trackIds } from '../lib/constants';
import type { TrackId } from '../lib/tracks';
import { Footer } from './Footer';
import { KeyboardListener } from './KeyboardListener';
import { LevelThermometer } from './LevelThermometer';
import { NightingaleChart } from './NightingaleChart';
import { PointSummaries } from './PointSummaries';
import { TitleSelector } from './TitleSelector';
import { Track } from './Track';
import { TrackSelector } from './TrackSelector';
import { Wordmark } from './Wordmark';

type SnowflakeAppState = {
  milestoneByTrack: TrackMilestoneMap;
  name: string;
  title: string;
  focusedTrackId: TrackId;
};

const emptyState: SnowflakeAppState = {
  name: '',
  title: '',
  milestoneByTrack: {
    MOBILE: 0,
    WEB_CLIENT: 0,
    FOUNDATIONS: 0,
    SERVERS: 0,
    PROJECT_MANAGEMENT: 0,
    COMMUNICATION: 0,
    CRAFT: 0,
    INITIATIVE: 0,
    CAREER_DEVELOPMENT: 0,
    ORG_DESIGN: 0,
    WELLBEING: 0,
    ACCOMPLISHMENT: 0,
    MENTORSHIP: 0,
    EVANGELISM: 0,
    RECRUITING: 0,
    COMMUNITY: 0,
  },
  focusedTrackId: 'MOBILE',
};

const defaultState: SnowflakeAppState = {
  name: 'Cersei Lannister',
  title: 'Staff Engineer',
  milestoneByTrack: {
    MOBILE: 1,
    WEB_CLIENT: 2,
    FOUNDATIONS: 3,
    SERVERS: 2,
    PROJECT_MANAGEMENT: 4,
    COMMUNICATION: 1,
    CRAFT: 1,
    INITIATIVE: 4,
    CAREER_DEVELOPMENT: 3,
    ORG_DESIGN: 2,
    WELLBEING: 0,
    ACCOMPLISHMENT: 4,
    MENTORSHIP: 2,
    EVANGELISM: 2,
    RECRUITING: 3,
    COMMUNITY: 0,
  },
  focusedTrackId: 'MOBILE',
};

const coerceMilestone = (value: number): Milestone => {
  if (value < 0 && value > 5) return 0;
  return value as Milestone;
};

const hashToState = (hash: string): SnowflakeAppState | null | undefined => {
  if (!hash) return null;
  const result = { ...defaultState };
  const hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  trackIds.forEach((trackId, index) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[index]));
  });
  if (hashValues[16]) result.name = decodeURI(hashValues[16]);
  if (hashValues[17]) result.title = decodeURI(hashValues[17]);
  return result;
};

const stateToHash = (state: SnowflakeAppState): string | null => {
  if (!state || !state.milestoneByTrack) return null;
  const values = trackIds
    .map((trackId) => state.milestoneByTrack[trackId])
    .concat([
      encodeURI(state.name) as unknown as Milestone,
      encodeURI(state.title) as unknown as Milestone,
    ]);
  return values.join(',');
};

export function SnowflakeApp() {
  const [state, setState] = useState(emptyState);

  useEffect(() => {
    const newState = hashToState(window.location.hash) ?? defaultState;
    setState(newState);

    const hash = stateToHash(newState);
    if (hash) window.location.replace(`#${hash}`);
  }, []);

  function handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = state.milestoneByTrack;
    milestoneByTrack[trackId] = milestone;

    const titles = eligibleTitles(milestoneByTrack);
    const title = titles.indexOf(state.title) === -1 ? titles[0] : state.title;

    setState({ milestoneByTrack, focusedTrackId: trackId, title, name: state.name });
  }

  function shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(state.focusedTrackId);
    index = (index + delta + trackIds.length) % trackIds.length;
    const focusedTrackId = trackIds[index];
    setState({ ...state, focusedTrackId });
  }

  function setFocusedTrackId(trackId: TrackId) {
    const index = trackIds.indexOf(trackId);
    const focusedTrackId = trackIds[index];
    setState({ ...state, focusedTrackId });
  }

  function shiftFocusedTrackMilestoneByDelta(delta: number) {
    const prevMilestone = state.milestoneByTrack[state.focusedTrackId];
    let milestone = prevMilestone + delta;
    if (milestone < 0) milestone = 0;
    if (milestone > 5) milestone = 5;
    handleTrackMilestoneChange(state.focusedTrackId, milestone as Milestone);
  }

  function updateTitle(title: string) {
    const titles = eligibleTitles(state.milestoneByTrack);
    title = titles.indexOf(title) === -1 ? titles[0] : title;
    setState({ ...state, title });
  }

  return (
    <main>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        }
        main {
          width: 960px;
          margin: 0 auto;
        }
        .name-input {
          border: none;
          display: block;
          border-bottom: 2px solid #fff;
          font-size: 30px;
          line-height: 40px;
          font-weight: bold;
          width: 380px;
          margin-bottom: 10px;
        }
        .name-input:hover,
        .name-input:focus {
          border-bottom: 2px solid #ccc;
          outline: 0;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
      <Wordmark />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <form>
            <input
              type='text'
              className='name-input'
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              placeholder='Name'
            />
            <TitleSelector
              milestoneByTrack={state.milestoneByTrack}
              currentTitle={state.title}
              setTitle={(title) => updateTitle(title)}
            />
          </form>
          <PointSummaries milestoneByTrack={state.milestoneByTrack} />
          <LevelThermometer milestoneByTrack={state.milestoneByTrack} />
        </div>
        <div style={{ flex: 0 }}>
          <NightingaleChart
            milestoneByTrack={state.milestoneByTrack}
            focusedTrackId={state.focusedTrackId}
            handleTrackMilestoneChange={handleTrackMilestoneChange}
          />
        </div>
      </div>
      <TrackSelector
        milestoneByTrack={state.milestoneByTrack}
        focusedTrackId={state.focusedTrackId}
        setFocusedTrackId={setFocusedTrackId}
      />
      <KeyboardListener
        selectNextTrack={() => shiftFocusedTrack(1)}
        selectPreviousTrack={() => shiftFocusedTrack(-1)}
        increaseFocusedMilestone={() => shiftFocusedTrackMilestoneByDelta(1)}
        decreaseFocusedMilestone={() => shiftFocusedTrackMilestoneByDelta(-1)}
      />
      <Track
        milestoneByTrack={state.milestoneByTrack}
        trackId={state.focusedTrackId}
        handleTrackMilestoneChange={handleTrackMilestoneChange}
      />
      <Footer />
    </main>
  );
}
