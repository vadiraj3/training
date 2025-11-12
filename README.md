# API Integration Training Project

This project is designed to train junior developers on API integration using React, Axios, and Material-UI.

## Project Structure

```
training/
├── backend/          # Node.js Express API server
│   ├── data/        # Mock data generators
│   ├── routes/      # API route handlers
│   └── server.js    # Express server
├── frontend/        # React + Vite application
│   └── src/
│       ├── pages/   # Page components
│       ├── services/# API service (Axios)
│       └── data/    # Task definitions
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. The server will run on `http://localhost:3000`
5. Swagger documentation is available at `http://localhost:3000/api-docs`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

5. Navigate to `http://localhost:5173/tasks` to see all training tasks

## API Endpoints

All endpoints return arrays of user objects with progressive complexity:

1. **GET /api/users/simple** - Flat objects (id, name, email, profile, avatar)
2. **GET /api/users/basic** - Single level nesting (address, contact objects)
3. **GET /api/users/medium** - Multiple nested objects (address, contact, profile)
4. **GET /api/users/hobbies** - Nested arrays of strings (hobbies)
5. **GET /api/users/skills** - Arrays of objects (skills with name, level, years)
6. **GET /api/users/company** - Deep nesting level 1 (company with nested address)
7. **GET /api/users/education** - Deep nesting level 2 (education array with nested details)
8. **GET /api/users/full** - Complex mixed structure (multiple nested objects and arrays)
9. **GET /api/users/advanced** - Very deep nesting (workHistory with nested company and projects)
10. **GET /api/users/complex** - Maximum complexity (all nesting levels combined)

## Training Tasks

Visit `/tasks` route in the frontend to see all 10 training tasks with:
- Detailed descriptions
- Data structure examples
- Requirements
- MUI components to use
- Hints and tips
- Expected results

## API Service

The Axios service is already set up in `frontend/src/services/api.js` with functions for all endpoints:

```javascript
import { getSimpleUsers, getBasicUsers, ... } from './services/api';
```

## Next Steps for Developer

1. Start both backend and frontend servers
2. Visit `/tasks` to see all training tasks
3. Start with Task 1 and work through each task progressively
4. For each task:
   - Create a new page/component
   - Import the appropriate API function
   - Fetch data using useEffect
   - Display data using MUI components
   - Handle loading and error states

## Technologies Used

- **Backend**: Node.js, Express, Swagger
- **Frontend**: React, Vite, Material-UI (MUI), Axios, React Router

## Notes

- All API endpoints return arrays
- Each task increases in complexity
- Swagger documentation shows the exact response structure for each endpoint
- The API service is pre-configured - you just need to use the functions

