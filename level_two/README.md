# Level Two: Intermediate API Integration Track

This level is designed for intermediate learners who already understand basic API calls and simple rendering.

The focus here is:
- Rendering **deeply nested objects**
- Handling **arrays inside arrays**
- Building **structured UIs** with meaningful MUI components
- Avoiding the anti-pattern of rendering everything with only `Typography`

---

## How To Use This Level

1. Run backend from `level_two/backend`
2. Run frontend from `level_two/frontend`
3. Open `/tasks` in the frontend app
4. Complete tasks in order (`1` to `10`)

---

## UI Expectation (Important)

For every task:
- Use `Typography` for labels/text, but **not as the only UI primitive**
- Use structural components like `Card`, `Grid`, `Accordion`, `Table`, `Tabs`, and `List`
- Use visual semantics (`Chip`, `Alert`, `LinearProgress`) for status, severity, and progress
- Break complex views into reusable sections/components

---

## Task Quick Reference + MUI Component Guidance

## Task 1: Organization Overview
- **Endpoint:** `GET /api/users/org`
- **API function:** `getOrgUsers()`
- **Expected UI pattern:** Profile card with organization summary + department chips/list
- **Use these MUI components:**
  - `Card`, `CardHeader`, `CardContent`
  - `Grid` (user layout)
  - `Stack` (group organization metadata)
  - `Chip` (hiring status, department tags)
  - `Divider`
  - `Avatar` (optional for manager/profile feel)

## Task 2: Project Tracker
- **Endpoint:** `GET /api/users/projects`
- **API function:** `getProjectsUsers()`
- **Expected UI pattern:** Expandable project list with milestones and progress
- **Use these MUI components:**
  - `Accordion`, `AccordionSummary`, `AccordionDetails`
  - `List`, `ListItem`, `ListItemText`
  - `LinearProgress` (milestone completion)
  - `Chip` (project status)
  - `Card`, `CardContent`
  - `Tooltip` (optional for blocker details)

## Task 3: Communication Hub
- **Endpoint:** `GET /api/users/contacts`
- **API function:** `getContactsUsers()`
- **Expected UI pattern:** Channel cards + emergency contact methods
- **Use these MUI components:**
  - `Card`, `CardContent`
  - `Grid` (channels vs emergency contacts)
  - `Paper` (channel blocks)
  - `List`, `ListItem`, `ListItemIcon`, `ListItemText`
  - `Badge` (preferred channel emphasis)
  - `Divider`

## Task 4: Weekly Planner
- **Endpoint:** `GET /api/users/schedule`
- **API function:** `getScheduleUsers()`
- **Expected UI pattern:** Day-wise navigation with shift/task breakdown
- **Use these MUI components:**
  - `Tabs`, `Tab` (day switching)
  - `Card`, `CardContent`
  - `List` (shift tasks)
  - `Chip` (priority, tags)
  - `Stack` or `Box` (task metadata grouping)
  - `Alert` (empty day/no tasks state)

## Task 5: Asset Registry
- **Endpoint:** `GET /api/users/assets`
- **API function:** `getAssetsUsers()`
- **Expected UI pattern:** Asset cards + maintenance history table
- **Use these MUI components:**
  - `Card`, `CardContent`
  - `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`
  - `Paper` (table container)
  - `Chip` (asset type)
  - `Divider`
  - `Accordion` (optional per-asset details)

## Task 6: Performance Dashboard
- **Endpoint:** `GET /api/users/reviews`
- **API function:** `getReviewsUsers()`
- **Expected UI pattern:** Quarterly metric dashboard with goal progress
- **Use these MUI components:**
  - `Card`, `CardContent`
  - `Grid` (metric cards)
  - `LinearProgress` (goal progress)
  - `Chip` (quarter labels/risk state)
  - `Alert` (highlight weak performance bands)
  - `Divider`

## Task 7: Client Portfolio
- **Endpoint:** `GET /api/users/clients`
- **API function:** `getClientsUsers()`
- **Expected UI pattern:** Client-level accordion with contracts + renewals
- **Use these MUI components:**
  - `Accordion`, `AccordionSummary`, `AccordionDetails`
  - `Card`, `CardContent`
  - `List`, `ListItem`, `ListItemText`
  - `Chip` (renewal status)
  - `Table` (optional for contract values/timeline)
  - `AvatarGroup` (optional stakeholder visualization)

## Task 8: Compensation Explorer
- **Endpoint:** `GET /api/users/finance`
- **API function:** `getFinanceUsers()`
- **Expected UI pattern:** Multi-section financial summary and breakdown tables
- **Use these MUI components:**
  - `Card`, `CardContent`
  - `Grid` (summary KPIs)
  - `Table` (bonuses, reimbursements)
  - `Paper` (financial section wrappers)
  - `Divider`
  - `Chip` (category labels)

## Task 9: Operations Map
- **Endpoint:** `GET /api/users/operations`
- **API function:** `getOperationsUsers()`
- **Expected UI pattern:** Region → warehouse → section hierarchy with utilization
- **Use these MUI components:**
  - `Accordion` (region and warehouse levels)
  - `Card`, `CardContent`
  - `LinearProgress` (utilization)
  - `Chip` (section code / thresholds)
  - `List` (inventory lines)
  - `Tooltip` (inventory details)

## Task 10: Strategy Workspace
- **Endpoint:** `GET /api/users/strategy`
- **API function:** `getStrategyUsers()`
- **Expected UI pattern:** Tabbed strategic dashboard with phased deliverables and risk register
- **Use these MUI components:**
  - `Tabs`, `Tab` (objectives/initiatives/risks)
  - `Accordion` (initiative and phase expansion)
  - `Card`, `CardContent`
  - `Chip` (severity/readiness)
  - `Alert` (risk register highlights)
  - `Grid` (summary cards)
  - `Dialog` or `Drawer` (optional deep drill-down)

---

## Suggested Reusable Components

To keep code maintainable, create reusable components such as:
- `UserShellCard`
- `SectionHeader`
- `StatusChip`
- `ProgressWithLabel`
- `EmptyStateMessage`
- `KeyValueList`

---

## Evaluation Checklist (For Learners)

- Data fetching works with loading and error states
- Nested arrays/objects are rendered safely (`?.` and fallback UI)
- UI is structured (not plain text dump)
- At least 4-6 relevant MUI components are used per task
- Repeated UI patterns are componentized
- Numeric/date values are formatted for readability

