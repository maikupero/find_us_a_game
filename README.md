# Find Us A Game

Single-page webapp to find just the right game for you and your friends. 

No more browsing steam's massive (and at times, shocking) selection, 
or downloading 50 different microtransaction filled apps.

Find a game you've never heard of, narrow it down by whatever filters matter to you, and start playing!

To Do: 

- TESTING: JEST
    - https://jestjs.io/

- HOURLY AUTHENTICATION: Cron
    - https://cron.com/
    - https://cron.help/

- STATE MANAGEMENT: Redux

- DOMAIN AND DATABASE - Heroku PostgreSQL
    - https://dashboard.heroku.com/apps/
    - https://github.com/twitchdev/authentication-node-sample/blob/main/index.js
    - https://dev.twitch.tv/docs/authentication

- ANIMATIONS: 
    - https://www.framer.com/developers/
    - https://youtu.be/nyg5Lpl6AiM
    
- BACKGROUND:
    - Hardcode with images, or generate images dynamically?

- SEARCH:
    - Setting up a search function using igdb api, OAuth twitch.
    - Display simple data on the game, then:
        - Add game to find us a game database 
        - Save game to personal list
        - View on other platforms.

- Design of main component UI (how to find the game)
    - Categories to implement:
        - Number of players: 1-9+
        - Cost:  Free, < increments of 5, Any
        - Genre: Puzzle (Baba), Adventure (Valheim), Action (Valorant).
        - Duration/Progression: Linear (RPG), Open (Minecraft), Match (Dota, SlaytheSpire)
        - Style: Cooperative or Competitive?

    https://api-docs.igdb.com/#multiplayer-mode

