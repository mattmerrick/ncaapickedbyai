/**
 * NCAA AI Pickem - Bracket Data
 * Structure supports real-time updates when ESPN/API results are available.
 * Total games: 4 (First Four) + 32 (R64) + 16 (R32) + 8 (S16) + 4 (E8) + 2 (FF) + 1 (NC) = 67
 */

const TOTAL_BRACKET_GAMES = 67;

/** Official tally vs 2026 tournament results (67 games incl. First Four). */
const FINAL_SCORECARD_2026 = {
  actualChampion: 'Michigan',
  actualRunnerUp: 'Arizona',
  actualFinalFour: ['Michigan', 'Arizona', 'UConn', 'Illinois'],
  ais: {
    chatgpt: { gamesCorrect: 42, finalFourCorrect: 3, regionWinnersCorrect: 2, championCorrect: false, runnerUpCorrect: true },
    claude: { gamesCorrect: 41, finalFourCorrect: 3, regionWinnersCorrect: 2, championCorrect: false, runnerUpCorrect: true },
    gemini: { gamesCorrect: 40, finalFourCorrect: 3, regionWinnersCorrect: 2, championCorrect: false, runnerUpCorrect: true },
    grok: { gamesCorrect: 35, finalFourCorrect: 2, regionWinnersCorrect: 2, championCorrect: false, runnerUpCorrect: false }
  }
};

const AI_PICKS = {
  grok: {
    id: 'grok',
    name: 'Grok',
    emoji: '\u{1F916}',
    correctPicks: 35,
    totalGames: TOTAL_BRACKET_GAMES,
    champion: { seed: 1, team: 'Arizona', region: 'West', score: '82-75', opponent: 'Iowa State' },
    finalFour: [
      { seed: 1, team: 'Arizona', region: 'West' },
      { seed: 2, team: 'Iowa State', region: 'Midwest' },
      { seed: 3, team: 'Michigan State', region: 'East' },
      { seed: 3, team: 'Illinois', region: 'South' }
    ],
    biggestUpset: {
      round: 'Elite Eight',
      region: 'East',
      winner: { seed: 3, team: 'Michigan State' },
      loser: { seed: 1, team: 'Duke' },
      description: '(3) Michigan State knocks out (1) Duke'
    },
    regions: {
      east: { /* full data in index.html */ },
      west: {},
      midwest: {},
      south: {}
    }
  },
  chatgpt: {
    id: 'chatgpt',
    name: 'ChatGPT',
    emoji: '\u{1F4AC}',
    correctPicks: 42,
    totalGames: TOTAL_BRACKET_GAMES,
    champion: null,
    finalFour: [],
    biggestUpset: null,
    comingSoon: false
  },
  claude: {
    id: 'claude',
    name: 'Claude',
    emoji: '\u{1F9E0}',
    correctPicks: 41,
    totalGames: TOTAL_BRACKET_GAMES,
    champion: { seed: 1, team: 'Duke', region: 'East', score: null, opponent: 'Arizona' },
    finalFour: [
      { seed: 1, team: 'Duke', region: 'East' },
      { seed: 1, team: 'Arizona', region: 'West' },
      { seed: 1, team: 'Michigan', region: 'Midwest' },
      { seed: 2, team: 'Houston', region: 'South' }
    ],
    biggestUpset: {
      round: 'First Round',
      region: 'East',
      winner: { seed: 10, team: 'UCF' },
      loser: { seed: 7, team: 'UCLA' },
      description: '(10) UCF def. (7) UCLA - 10-seeds beat 7-seeds ~40% historically'
    },
    comingSoon: false
  },
  gemini: {
    id: 'gemini',
    name: 'Gemini',
    emoji: '\u2728',
    correctPicks: 40,
    totalGames: TOTAL_BRACKET_GAMES,
    champion: { seed: 1, team: 'Duke', region: 'East', score: '78-72', opponent: 'Arizona' },
    finalFour: [
      { seed: 1, team: 'Duke', region: 'East' },
      { seed: 1, team: 'Arizona', region: 'West' },
      { seed: 1, team: 'Michigan', region: 'Midwest' },
      { seed: 2, team: 'Houston', region: 'South' }
    ],
    biggestUpset: {
      round: 'Second Round',
      region: 'East',
      winner: { seed: 7, team: 'UCLA' },
      loser: { seed: 2, team: 'UConn' },
      description: '(7) UCLA def. (2) UConn'
    },
    comingSoon: false
  }
};
