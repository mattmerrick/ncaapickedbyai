# NCAA AI Pickem – 2026 Tournament

AI vs. AI March Madness bracket predictions. Compare picks from Grok, ChatGPT, Claude, and Gemini.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Deploy (no build step needed – static HTML)

Or with Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Real-Time Updates

When the tournament starts, the page can fetch live results from ESPN's API to update correct pick counts. Enable in `index.html`:
```js
fetchLiveResults();
setInterval(fetchLiveResults, 60000);
```

ESPN API: `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?seasontype=3`
