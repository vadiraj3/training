# RTK Query Client Guide

This app talks to the **same** backend as `api_integration_two`.

You already know Axios services. Now do the same CRUD with **RTK Query**.

## Quick Start

```bash
# terminal 1
cd api_integration_two/server
npm start

# terminal 2
cd api_integration_three/client
npm install
npm run dev
```

## Axios Services vs RTK Query

| Axios style (`api_integration_two`) | RTK Query style (this folder) |
|---|---|
| `apiClient.js` + `productsApi.js` helpers | `baseApi.js` + `productsApi.js` injectEndpoints |
| Call helpers inside `useEffect` | Use hooks like `useGetProductsQuery()` |
| Manual loading/error state | Built-in `isLoading` / `error` |
| Manual refetch after create/delete | `invalidatesTags` refreshes cache |

## Start Here

1. Read `src/store/api/baseApi.js`
2. Study the filled example: `src/store/api/productsApi.js`
3. Implement the empty files (`todosApi.js`, etc.)
4. Uncomment imports in `src/store/store.js`
5. Wire hooks into pages (pages are UI shells only)

## MUI Reminder

Same as before — do not render everything with Typography only:

- Products → `Chip` for tags
- Todos → `Accordion` + `Checkbox`
- Projects → `Stepper`
- Orders → `Table`
- Tickets → `Dialog` + `List`
