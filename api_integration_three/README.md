# API Integration Three — RTK Query

Client-only training track. Reuses the **same server** from `api_integration_two`.

Goal: move from Axios service helpers to **Redux Toolkit Query** (`createApi` + hooks).

## Run

### 1) Start the shared server (from api_integration_two)

```bash
cd api_integration_two/server
npm install
npm start
```

- API: http://localhost:3001/api
- Swagger: http://localhost:3001/api-docs

### 2) Start this RTK Query client

```bash
cd api_integration_three/client
npm install
npm run dev
```

Client: http://localhost:5175

---

## Folder Structure

```text
api_integration_three/
└── client/
    └── src/
        ├── store/
        │   ├── store.js              # configureStore + baseApi middleware
        │   └── api/
        │       ├── baseApi.js        # createApi + baseUrl (FILLED)
        │       ├── productsApi.js    # EXAMPLE injectEndpoints (FILLED)
        │       ├── todosApi.js       # TODO for learner
        │       ├── projectsApi.js    # TODO for learner
        │       ├── ordersApi.js      # TODO for learner
        │       └── ticketsApi.js     # TODO for learner
        ├── pages/                    # UI shells — wire RTK hooks yourself
        ├── components/
        ├── App.jsx
        └── main.jsx                  # Provider wraps the app
```

---

## What Is Pre-Filled

| File | Status |
|---|---|
| `baseApi.js` | Ready — shared `createApi` + `fetchBaseQuery` |
| `store.js` | Ready — reducer + middleware |
| `productsApi.js` | **Example** — full GET/POST/PUT/DELETE + tags |
| Other `*Api.js` | Empty TODOs |
| Pages | UI only — no hooks wired yet |

---

## How To Follow The Example

1. Open `store/api/productsApi.js`
2. Notice `baseApi.injectEndpoints(...)`
3. Notice auto-generated hooks:
   - `useGetProductsQuery`
   - `useCreateProductMutation`
   - `useUpdateProductMutation`
   - `useDeleteProductMutation`
4. Copy that pattern into `todosApi.js` (then projects / orders / tickets)
5. Import the new slice in `store.js` (uncomment the import line)
6. Wire hooks in the matching page

### Page usage sketch (products)

```js
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from '../store/api/productsApi';

const { data: products = [], isLoading, isError, error } = useGetProductsQuery();
const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
const [deleteProduct] = useDeleteProductMutation();
```

---

## Same Resources As api_integration_two

| Resource | Array field | Tag type |
|---|---|---|
| Products | `tags` | `Product` |
| Todos | `subTasks` | `Todo` |
| Projects | `milestones` | `Project` |
| Orders | `items` | `Order` |
| Tickets | `messages` | `Ticket` |

---

## Learner Checklist

For each resource:

1. Implement `injectEndpoints` in the API file
2. Export generated hooks
3. Import the slice file in `store.js`
4. Use query hooks for list/detail
5. Use mutation hooks for create/update/delete
6. Rely on `providesTags` / `invalidatesTags` (no manual refetch unless needed)
7. Keep pages free of hardcoded full URLs
