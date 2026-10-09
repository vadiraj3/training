# Search, Filter, and Sort

Client-only practice. There is no API. The catalog lives in `client/src/data/products.json` so the list has enough variety to search, filter, and sort.

## Run

```bash
cd search_filter/client
npm install
npm run dev
```

Open http://localhost:5176

## What is already done

- 24 products with mixed categories, prices, ratings, stock, and dates
- Search box, category select, stock select, and sort select
- A table that currently shows **every** product

## What the learner writes

In `src/pages/CatalogPage.jsx`, replace this line:

```js
const visibleProducts = products;
```

Build a new array that:

1. Searches `name` with the search box (ignore letter case)
2. Filters by category when it is not `all`
3. Filters by stock (`in` or `out`)
4. Sorts by the selected option: name, price low-high, price high-low, rating, newest date

Search, filter, and sort must work **together**. Copy the array before sorting so the original JSON order stays intact.

## MUI already on the page

`TextField`, `Select`, `MenuItem`, `Table`, `Chip`, `Alert`, `Paper`, `Stack`
