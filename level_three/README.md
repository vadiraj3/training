# Level Three: Advanced API Integration Track

This level is designed for learners who are comfortable with nested objects and arrays and are ready to handle unusual API response shapes.

## What This Level Teaches

- Rendering deeply nested objects with reusable sections
- Handling arrays inside arrays and document-style payloads
- Working with primitive responses like strings, numbers, and booleans
- Handling `null` cleanly with empty-state UI
- Rendering matrix-style array responses as tables

## How To Use This Level

1. Run the backend from `level_three/backend`
   ```bash
   cd level_three/backend
   npm install
   npm start
   ```
2. Run the frontend from `level_three/frontend`
   ```bash
   cd level_three/frontend
   npm install
   npm run dev
   ```
3. Open the app in your browser.
4. Use `/tasks` to read the exercises.
5. Use `/starter-views` to preview the sample UI patterns for Tasks 6 to 10.
6. Complete the tasks in order from `1` to `10`.

## UI Expectation

For each task:

- Use `Typography` for text, but not as the only layout primitive
- Use `Card`, `Grid`, `Stack`, `Accordion`, `Table`, `List`, `Chip`, and `Alert` to give the data structure visual meaning
- Break large responses into reusable components
- Use defensive rendering for `null` and primitive responses

## Task Breakdown

The first five tasks focus on complex nested object responses:

- Profile composer
- Campaign planner
- Warehouse operations
- Knowledge base article
- Risk register

The final five tasks cover alternate response shapes:

- Plain string payload
- Numeric KPI payload
- Boolean flag payload
- Null / empty payload
- Matrix-style array payload

## Suggested Task Workflow

1. Open the task in `/tasks` and read the endpoint, data structure, and UI hints.
2. Inspect the API response shape before building the screen.
3. Start with the starter view in `/starter-views` for Tasks 6 to 10 if you need a visual guide.
4. Build a small reusable component first, then wire in the API call.
5. Handle loading, error, and empty states before polishing the layout.
6. Move to the next task only after the current one renders correctly.

## Suggested Reusable Components

- `SectionHeader`
- `MetricChip`
- `StatusBanner`
- `EmptyStateMessage`
- `KeyValueList`
- `MatrixTable`

## Notes

- All endpoints are served from `http://localhost:3000/api`
- Swagger documentation is available at `http://localhost:3000/api-docs`
- Level 3 is intentionally less predictable than levels 1 and 2
- Students should inspect the response shape before choosing the UI pattern
- The sample UI pages are intentionally starter patterns, not final solutions
