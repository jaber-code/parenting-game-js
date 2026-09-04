# Parenting Game

A browser-based physics puzzle game built in 2015 as one of my first independent coding
projects, less than a year into my career as a developer.

The player guides a parent to catch falling children using Box2D physics, across 5 themed
level sets with progressively harder layouts.

## What I built

- Game logic, physics setup, and collision handling in plain JavaScript
  ([js/rubish.js](js/rubish.js)), on top of the [Box2dWeb](js/Box2dWeb-2.1.a.3.min.js) port
  of the Box2D physics engine (bodies, fixtures, collision filtering, particle effects).
- Data-driven level design: each level is defined as a JSON payload
  ([Json/](Json/)) describing shapes, physics properties, and layout, loaded and converted
  into Box2D bodies at runtime.
- Level content and hint data ([js/LevelsHints.js](js/LevelsHints.js)) across 5 themes
  ([Levels/](Levels/)).

Visual animation/timeline work (stage layout, tweens) was done in Adobe Edge Animate, whose
generated runtime produces [index_edge.js](index_edge.js) and
[index_edgeActions.js](index_edgeActions.js) — not hand-written game logic.

## Status

This is an old project kept for history, not actively maintained. Code style and structure
reflect where I was as a developer at the time, not my current practices.

## Running it

Open [index.html](index.html) in a browser (or serve the folder with any static file server).
