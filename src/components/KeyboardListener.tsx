import { useCallback, useEffect } from 'react';

type Props = {
  increaseFocusedMilestone: () => void;
  selectNextTrack: () => void;
  decreaseFocusedMilestone: () => void;
  selectPreviousTrack: () => void;
};

export function KeyboardListener({
  increaseFocusedMilestone,
  selectNextTrack,
  decreaseFocusedMilestone,
  selectPreviousTrack,
}: Props) {
  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
          increaseFocusedMilestone();
          event.preventDefault();
          break;
        case 'ArrowRight':
          selectNextTrack();
          event.preventDefault();
          break;
        case 'ArrowDown':
          decreaseFocusedMilestone();
          event.preventDefault();
          break;
        case 'ArrowLeft':
          selectPreviousTrack();
          event.preventDefault();
          break;
      }
    },
    [increaseFocusedMilestone, selectNextTrack, decreaseFocusedMilestone, selectPreviousTrack],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  return null;
}
