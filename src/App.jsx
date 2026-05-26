import { useShallow } from 'zustand/shallow';
import { useGameStore } from './store/gameStore.js';
import TitleScreen from './components/TitleScreen.jsx';
import FactionMeters from './components/FactionMeters.jsx';
import SwipeCard from './components/SwipeCard.jsx';
import ObjectiveHints from './components/ObjectiveHints.jsx';
import GameOver from './components/GameOver.jsx';
import SenatorLog from './components/SenatorLog.jsx';

function GameUI() {
  const { meters, currentCard, objectives, completedObjectives, turn, swipe } =
    useGameStore(useShallow((s) => ({
      meters: s.meters,
      currentCard: s.currentCard,
      objectives: s.objectives,
      completedObjectives: s.completedObjectives,
      turn: s.turn,
      swipe: s.swipe,
    })));

  return (
    <div className="flex flex-col h-full w-full">
      {/* Faction meters — top bar */}
      <div className="flex-shrink-0 border-b border-border/30 bg-void/80 backdrop-blur-sm">
        <FactionMeters meters={meters} />
      </div>

      {/* Turn counter */}
      <div className="flex-shrink-0 flex justify-end px-4 py-1">
        <span className="text-[10px] font-display text-soft/25 uppercase tracking-widest">
          Turn {turn}
        </span>
      </div>

      {/* Card — takes available space */}
      <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden">
        <SwipeCard
          key={currentCard?.id}
          card={currentCard}
          onSwipe={swipe}
        />
      </div>

      {/* Objective hints — bottom */}
      <div className="flex-shrink-0">
        <ObjectiveHints
          objectives={objectives}
          completedObjectives={completedObjectives}
        />
      </div>
    </div>
  );
}

export default function App() {
  const phase = useGameStore((s) => s.phase);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {phase === 'title' && <TitleScreen />}
      {phase === 'game' && <GameUI />}
      {phase === 'dead' && (
        <div className="flex-1 overflow-y-auto">
          <GameOver />
        </div>
      )}
      {phase === 'log' && (
        <div className="flex-1 overflow-hidden flex flex-col">
          <SenatorLog />
        </div>
      )}
    </div>
  );
}
