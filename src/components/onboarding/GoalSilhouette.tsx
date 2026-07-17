import Svg, { Circle, Path, G } from 'react-native-svg';

import type { PrimaryGoal } from '@/types';

/**
 * Figure silhouettes occupying the right of each goal card.
 *
 * Stand-ins for the photography in the design — drawn as vectors so the cards
 * need no image assets. Swap for `<Image>` once the shoot lands; the card's
 * layout does not change.
 */

const FILL = 'rgba(255, 255, 255, 0.28)';
const FILL_SOFT = 'rgba(255, 255, 255, 0.18)';

/** Broad-shouldered, arms-down pose for Muscle Gain. */
function MuscleFigure() {
  return (
    <G>
      <Circle cx="60" cy="26" r="15" fill={FILL} />
      <Path
        d="M60 44
           C 44 44, 30 52, 26 68
           C 23 80, 22 96, 22 120
           L 40 120
           C 40 100, 42 86, 46 76
           L 46 120
           L 74 120
           L 74 76
           C 78 86, 80 100, 80 120
           L 98 120
           C 98 96, 97 80, 94 68
           C 90 52, 76 44, 60 44 Z"
        fill={FILL}
      />
      <Path d="M24 70 C 16 82, 14 98, 15 120 L 26 120 C 25 98, 27 82, 32 72 Z" fill={FILL_SOFT} />
      <Path d="M96 70 C 104 82, 106 98, 105 120 L 94 120 C 95 98, 93 82, 88 72 Z" fill={FILL_SOFT} />
    </G>
  );
}

/** Slimmer figure with a ponytail for Weight Loss. */
function SlimFigure() {
  return (
    <G>
      <Circle cx="60" cy="26" r="14" fill={FILL} />
      <Path d="M72 20 C 82 18, 86 26, 82 36 C 79 30, 75 26, 70 25 Z" fill={FILL_SOFT} />
      <Path
        d="M60 42
           C 49 42, 40 49, 37 62
           C 34 74, 34 88, 36 120
           L 52 120
           L 55 82
           L 65 82
           L 68 120
           L 84 120
           C 86 88, 86 74, 83 62
           C 80 49, 71 42, 60 42 Z"
        fill={FILL}
      />
      <Path d="M36 64 C 30 76, 28 98, 29 120 L 38 120 C 37 98, 38 78, 42 68 Z" fill={FILL_SOFT} />
      <Path d="M84 64 C 90 76, 92 98, 91 120 L 82 120 C 83 98, 82 78, 78 68 Z" fill={FILL_SOFT} />
    </G>
  );
}

/** Relaxed, casual stance for Healthy Lifestyle. */
function CasualFigure() {
  return (
    <G>
      <Circle cx="60" cy="26" r="14.5" fill={FILL} />
      <Path
        d="M60 43
           C 47 43, 37 50, 34 64
           C 31 77, 31 92, 33 120
           L 54 120
           L 56 84
           L 64 84
           L 66 120
           L 87 120
           C 89 92, 89 77, 86 64
           C 83 50, 73 43, 60 43 Z"
        fill={FILL}
      />
      <Path d="M33 66 C 27 78, 25 98, 26 120 L 36 120 C 35 98, 36 78, 40 70 Z" fill={FILL_SOFT} />
      <Path d="M87 66 C 93 78, 95 98, 94 120 L 84 120 C 85 98, 84 78, 80 70 Z" fill={FILL_SOFT} />
    </G>
  );
}

const figures: Record<PrimaryGoal, () => React.JSX.Element> = {
  muscle_gain: MuscleFigure,
  weight_loss: SlimFigure,
  healthy_lifestyle: CasualFigure,
};

export function GoalSilhouette({ goal, size }: { goal: PrimaryGoal; size: number }) {
  const Figure = figures[goal];
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      <Figure />
    </Svg>
  );
}
