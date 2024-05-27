An web application that transcribes and translates .mp3 files

## Tech stack

- NextJS, ReactJS
- Flask, OpenAI Whisper and a python package that wraps Google Translate's web API (a.k.a it's free and no credentials are required)

## Project structure

- /src contains all React components and UI logic
- /api contains the Flask server and the backend logic (no database used, just file I/O)

## Getting Started

```bash
npm install
conda create -n transcrib
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Further info
No demo is available, as the backend third-party packages make any VPC image exceeed 2GB (mainly due to pytorch). 

It's not polished and no guarantees it'll work on your machine but you can reach out to vasilen.alexandrov@gmail.com and I'll do what I can to help you out.
