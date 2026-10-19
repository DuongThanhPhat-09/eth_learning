# Học Ethereum (Learn Ethereum)

A website for learning Ethereum in Vietnamese, from zero all the way to developer topics. The content is based on the documentation at [ethereum.org](https://ethereum.org).

> All lesson content on the site is written in Vietnamese.

## Features

- **77 lessons** across 8 chapters, from beginner to advanced
- **A quiz** at the end of every lesson to check what you learned
- **126 glossary terms** with short explanations (gas, rollup, staking…)
- **Flashcards** for practicing glossary terms
- **Review mode** with random questions from all lessons
- **Search** across lessons and glossary terms
- **Light / dark** theme, works well on phones
- **Progress is saved automatically** in your browser, no login needed

## Learning path

| # | Chapter | Level | Lessons |
|---|---------|-------|:-------:|
| 1 | Ethereum basics | Beginner | 9 |
| 2 | Using Ethereum safely | Beginner | 9 |
| 3 | What is Ethereum used for? | Beginner → Intermediate | 13 |
| 4 | Staking, nodes and energy | Intermediate | 6 |
| 5 | Ethereum roadmap | Intermediate | 10 |
| 6 | Foundations for developers | Intermediate → Advanced | 11 |
| 7 | The Ethereum stack: building apps | Intermediate → Advanced | 9 |
| 8 | Advanced topics | Advanced | 10 |

If you only want to understand Ethereum as a user, chapters 1–5 are enough. Chapters 6–8 are for people who want to build on Ethereum.

## How to run

You need [Node.js](https://nodejs.org) installed first.

```bash
# 1. Download the project
git clone https://github.com/DuongThanhPhat-09/eth_learning.git
cd eth_learning

# 2. Install (only needed once)
npm install

# 3. Run
npm run dev
```

Then open your browser and go to **http://127.0.0.1:5173**.

Press `Ctrl + C` in the terminal to stop.

> **Don't want to install Node.js?** You can open `index.html` directly in your browser and the site still works.

### "running scripts is disabled" error on Windows

If you get this error when running `npm run dev` in PowerShell, use this command instead:

```powershell
npm.cmd run dev
```

Or run this command once to fix it for good:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `/` or `Ctrl + K` | Open search |
| `←` `→` | Go to the previous / next lesson |
| `Esc` | Close search or the menu |

## Project structure

```
eth_learning/
├── index.html        # Main page
├── css/
│   └── styles.css    # Styles
└── js/
    ├── app.js        # Rendering, search, quizzes, flashcards
    └── data/         # Lesson content
        ├── 01-basics.js
        ├── ...
        ├── 08-dev-advanced.js
        └── glossary.js   # Glossary terms
```

To edit or add lesson content, just change the files in `js/data/`. The page reloads automatically when you save a file.
