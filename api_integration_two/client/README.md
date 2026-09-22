# API Integration Two — Client Guide

This client teaches a clean frontend structure for consuming CRUD APIs with Axios + MUI.

Server base URL: `http://localhost:3001/api`  
Swagger docs: `http://localhost:3001/api-docs`

---

## Run The Client

```bash
cd api_integration_two/client
npm install
npm run dev
```

Client runs on `http://localhost:5174`.

Make sure the server is running first:

```bash
cd api_integration_two/server
npm install
npm start
```

---

## Recommended Folder Structure

```text
client/
├── public/
├── src/
│   ├── components/          # Reusable UI pieces (layout, cards, dialogs)
│   ├── hooks/               # Optional custom hooks (useProducts, useTodos)
│   ├── pages/               # One page per resource (Products, Todos, ...)
│   ├── services/            # IMPORTANT: Axios config + API helpers
│   │   ├── apiClient.js     # baseURL + shared Axios instance
│   │   ├── productsApi.js   # products GET/POST/PUT/DELETE helpers
│   │   ├── todosApi.js
│   │   ├── projectsApi.js
│   │   ├── ordersApi.js
│   │   ├── ticketsApi.js
│   │   └── index.js         # re-export everything
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

### Why this structure?

- Pages stay focused on UI + state.
- API details live in `services/` (not scattered full URLs).
- Changing the backend host means editing **one file**: `apiClient.js`.

### What is already filled vs what you write

- Filled for you: `apiClient.js` + `productsApi.js` (example pattern)
- Empty for you: `todosApi.js`, `projectsApi.js`, `ordersApi.js`, `ticketsApi.js`
- Pages are UI shells only (no GET/POST/PUT/DELETE wiring yet)

---

## Stop Writing Full URLs In Every File

### Bad pattern (avoid)

```js
import axios from 'axios';

axios.get('http://localhost:3001/api/products');
axios.post('http://localhost:3001/api/todos', payload);
```

### Good pattern (required for this training)

1. Create one shared client:

```js
// src/services/apiClient.js
import axios from 'axios';

export const API_BASE_URL = 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;
```

2. Create one file per resource:

```js
// src/services/productsApi.js
import apiClient from './apiClient';

export const getProducts = () => apiClient.get('/products');
export const createProduct = (payload) => apiClient.post('/products', payload);
export const updateProduct = (id, payload) => apiClient.put(`/products/${id}`, payload);
export const deleteProduct = (id) => apiClient.delete(`/products/${id}`);
```

3. Import helpers in pages:

```js
import { getProducts, createProduct } from '../services';
```

This is already set up for you under `src/services/`.

---

## APIs Available (All Full CRUD)

| Resource | Endpoints | Required array field |
|---|---|---|
| Products | `/api/products` | `tags` |
| Todos | `/api/todos` | `subTasks` |
| Projects | `/api/projects` | `milestones` |
| Orders | `/api/orders` | `items` |
| Tickets | `/api/tickets` | `messages` |

Each resource supports:

- `GET /api/<resource>`
- `GET /api/<resource>/:id`
- `POST /api/<resource>`
- `PUT /api/<resource>/:id`
- `DELETE /api/<resource>/:id`

---

## MUI Components To Use (Do Not Use Only Typography)

### Shared across all pages
- `Card`, `CardContent`
- `Stack`, `Box`, `Grid`
- `TextField`, `Button`
- `Alert` (success/error)
- `CircularProgress` (loading)
- `Chip` (status/tags)
- `Divider`

### Products (`tags` array)
- `Chip` for each tag
- `TextField` for create/edit form
- `Card` list layout
- Optional: `Autocomplete` for tag entry

### Todos (`subTasks` array)
- `Accordion`, `AccordionSummary`, `AccordionDetails`
- `Checkbox`
- `List`, `ListItem`, `ListItemText`, `ListItemIcon`
- `Chip` for priority/status

### Projects (`milestones` array)
- `Stepper`, `Step`, `StepLabel`
- `Chip` for project status
- `Card` / `Paper`
- Optional: `LinearProgress`

### Orders (`items` array)
- `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`
- `Paper` as table wrapper
- `Chip` for order status
- Optional: `Dialog` for edit

### Support Tickets (`messages` array)
- `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`
- `List` for message thread
- `Chip` for priority/status
- Optional: `Drawer` for side detail panel

---

## Learner Checklist Per Resource

For each of the 5 APIs, implement:

1. List records (`GET`)
2. Create record with a non-empty array field (`POST`)
3. Update full record (`PUT`)
4. Delete record (`DELETE`)
5. Loading + success + error states
6. Use service helpers (no hardcoded full URLs)
7. Use at least 4 MUI components beyond `Typography`

---

## Example: Create Todo With `subTasks`

```js
await createTodo({
  title: 'Ship training dashboard',
  dueDate: '2026-09-30',
  priority: 'high',
  status: 'open',
  subTasks: [
    { title: 'Wire GET list', done: true },
    { title: 'Build create form', done: false },
  ],
});
```

If `subTasks` is missing or empty, the API returns `400` validation errors.
