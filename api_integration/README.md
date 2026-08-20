# API Integration: POST, PATCH, and DELETE Practice

This folder is for practicing API integrations after learning GET requests. The backend stores created records in a local JSON file, so students can see how POST, PATCH, and DELETE requests change data without needing a database.

## Run The Backend

```bash
cd api_integration/backend
npm install
npm start
```

The backend runs on `http://localhost:3000` by default.

Swagger docs are available at:

```text
http://localhost:3000/api-docs
```

## Useful Read Endpoints

Use these GET endpoints to inspect saved data after creating, updating, or deleting records.

- `GET /api`
- `GET /api/records`
- `GET /api/records/:collection`

Valid collections are:

- `contacts`
- `tasks`
- `products`
- `feedback`
- `events`
- `orders`
- `projects`
- `jobApplications`
- `supportTickets`
- `courseEnrollments`

## POST Practice: Easy To Harder

### 1. Easy: Create Contact

`POST /api/contacts`

```json
{
  "name": "Aarav Sharma",
  "email": "aarav@example.com",
  "phone": "9876543210"
}
```

### 2. Easy: Create Task

`POST /api/tasks`

```json
{
  "title": "Connect login form to API",
  "dueDate": "2026-09-05",
  "priority": "medium"
}
```

### 3. Easy-Medium: Create Product

`POST /api/products`

```json
{
  "name": "Wireless Keyboard",
  "price": 2499,
  "inStock": true,
  "tags": ["electronics", "office"]
}
```

### 4. Easy-Medium: Create Feedback

`POST /api/feedback`

```json
{
  "rating": 4,
  "comment": "Checkout was fast, but the address form needs clearer labels.",
  "source": "web"
}
```

### 5. Medium: Create Event

`POST /api/events`

```json
{
  "title": "Frontend API Workshop",
  "date": "2026-09-12",
  "location": "Training Room 2",
  "attendees": ["Neha", "Kabir", "Isha"]
}
```

### 6. Medium: Create Order

`POST /api/orders`

```json
{
  "customer": {
    "name": "Meera Iyer",
    "email": "meera@example.com"
  },
  "items": [
    { "sku": "KEY-101", "name": "Wireless Keyboard", "quantity": 1, "price": 2499 },
    { "sku": "MOU-205", "name": "Bluetooth Mouse", "quantity": 2, "price": 899 }
  ],
  "shippingAddress": {
    "line1": "21 MG Road",
    "city": "Bengaluru",
    "postalCode": "560001"
  }
}
```

### 7. Medium: Create Project

`POST /api/projects`

```json
{
  "name": "Customer Portal Refresh",
  "owner": "Ananya",
  "budget": 150000,
  "milestones": [
    { "title": "API contract review", "status": "done" },
    { "title": "Build dashboard screens", "status": "in-progress" }
  ]
}
```

### 8. Medium-Hard: Create Job Application

`POST /api/job-applications`

```json
{
  "candidate": {
    "name": "Rohan Patel",
    "email": "rohan@example.com",
    "experienceYears": 2
  },
  "role": "Junior JavaScript Developer",
  "skills": ["JavaScript", "React", "Axios"],
  "links": {
    "github": "https://github.com/rohan",
    "portfolio": "https://rohan.dev"
  }
}
```

### 9. Harder: Create Support Ticket

`POST /api/support-tickets`

```json
{
  "subject": "Payment failed but amount was deducted",
  "priority": "high",
  "requester": {
    "name": "Sara Khan",
    "email": "sara@example.com"
  },
  "messages": [
    {
      "from": "customer",
      "body": "The app showed an error after payment.",
      "createdAt": "2026-08-20T10:30:00.000Z"
    }
  ]
}
```

### 10. Harder: Create Course Enrollment

`POST /api/course-enrollments`

```json
{
  "student": {
    "name": "Dev Malhotra",
    "email": "dev@example.com"
  },
  "course": {
    "title": "API Integration Basics",
    "level": "beginner"
  },
  "modules": [
    { "name": "GET requests", "completed": true, "score": 86 },
    { "name": "POST requests", "completed": false, "score": null }
  ],
  "preferences": {
    "mentorRequired": true,
    "sessionTime": "evening"
  }
}
```

## PATCH Practice

- `PATCH /api/tasks/:id`
- `PATCH /api/products/:id`
- `PATCH /api/events/:id`
- `PATCH /api/orders/:id`
- `PATCH /api/support-tickets/:id`

Example:

```json
{
  "status": "completed"
}
```

## DELETE Practice

- `DELETE /api/contacts/:id`
- `DELETE /api/tasks/:id`
- `DELETE /api/products/:id`
- `DELETE /api/events/:id`
- `DELETE /api/support-tickets/:id`

## Student Checklist

For every endpoint, practice:

- Send the request with `fetch` or Axios.
- Keep form input in React state.
- Show loading state while the request is running.
- Show success and error messages.
- Refresh the record list after create, update, or delete.
- Handle validation errors from the backend.
