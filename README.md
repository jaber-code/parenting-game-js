# Parenting Game

A browser-based physics puzzle game built in 2015 as one of my first independent coding
projects, less than a year into my career as a developer.

The player guides a parent to catch falling children using Box2D physics, across > 50 levels with progressively harder layouts.

<img width="1707" height="1027" alt="image" src="https://github.com/user-attachments/assets/c42e83f8-810c-45a4-a861-3291e26a21fe" />

## What I built

- Game logic, physics setup, and collision handling in plain JavaScript
, on top of the [Box2dWeb] port of the Box2D physics engine (bodies, fixtures, collision filtering,   particle effects).
- Data-driven level design: each level is defined as a JSON payload
  ([Json/](Json/)) describing shapes, physics properties, and layout, loaded and converted
  into Box2D bodies at runtime.
- Level content and hint data ([js/LevelsHints.js](js/LevelsHints.js)) across 5 themes
  ([Levels/](Levels/)).

## Status

This is an old project kept for history, not actively maintained. Code style and structure
reflect where I was as a developer at the time, not my current practices.

## Running it

Open [index.html](index.html) in a browser (or serve the folder with any static file server).
