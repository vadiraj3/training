# API Integration Two

Full CRUD training track (GET, POST, PUT, DELETE) with meaningful business resources and nested array fields.

## Structure

```text
api_integration_two/
├── server/   # Express + Swagger + JSON file store
└── client/   # React + Vite + Axios services + MUI pages
```

## Resources

1. **Products** — catalog items with `tags[]`
2. **Todos** — task lists with `subTasks[]`
3. **Projects** — delivery work with `milestones[]`
4. **Orders** — customer orders with `items[]`
5. **Tickets** — support tickets with `messages[]`

## Quick Start

### Server (port 3001)

```bash
cd api_integration_two/server
npm install
npm start
```

- API root: http://localhost:3001
- Swagger: http://localhost:3001/api-docs
- Reset data: `npm run reset:data`

### Client (port 5174)

```bash
cd api_integration_two/client
npm install
npm run dev
```

Open http://localhost:5174 and follow `client/README.md` for folder structure, Axios service pattern, and MUI guidance.

Note: frontend pages are UI shells. Learners must write the integration code. Only `productsApi.js` is pre-filled as an example.
