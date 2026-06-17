export interface HexCoord {
  q: number;
  r: number;
}

export enum HexType {
  EMPTY = 'empty',
  NUTRIENT = 'nutrient',
  POLLUTED = 'polluted',
  MYCELIUM = 'mycelium',
  START = 'start',
}

export interface HexCell {
  coord: HexCoord;
  type: HexType;
  nutrientId?: string;
}

export interface GameState {
  id: string;
  level: number;
  gridRadius: number;
  cells: Record<string, HexCell>;
  nutrients: string[];
  connectedNutrients: string[];
  startCoord: HexCoord;
  myceliumCells: HexCoord[];
  steps: number;
  optimalSteps: number;
  status: 'playing' | 'won' | 'lost';
  createdAt: number;
  updatedAt: number;
}

export type TimelineAction = 'spread' | 'undo' | 'purify' | 'connect_nutrient' | 'win';

export interface TimelineEntry {
  id: number;
  action: TimelineAction;
  step: number;
  coords: HexCoord[];
  description: string;
  timestamp: number;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}
