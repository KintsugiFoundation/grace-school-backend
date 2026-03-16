# grace-school-backend

REST API server for the Grace School, powering both the Grace School website and admin dashboard.

## Getting Started

**Prerequisites**
- Node.js (v18 or above)
- npm
- MongoDB 

**Running Locally**
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` to start the development server

## Project Structure
```
grace-school-backend/
├── uploads/
├── src/
├── .env
├── commit.txt
├── server.js
├── app.js
├── README.md
└── package.json
```

## API Endpoints

BASE URL : `/api/v1`

### Category
| Method | Endpoint | Description |
|---|---|---|
| POST | `/create-category` | Create a new category |
| GET | `/get-all-categories` | Retrieve all categories |
| GET | `/get-category/:id` | Retrieve a category by ID |
| PATCH | `/update-category/:id` | Update a category by ID |
| DELETE | `/delete-category/:id` | Delete a category by ID |

### Contact
| Method | Endpoint | Description |
|---|---|---|
| POST | `/contact` | Create a new contact |

### Events
| Method | Endpoint | Description |
|---|---|---|
| POST | `/create-event` | Create a new event |
| GET | `/get-all-events` | Retrieve all events |
| GET | `/get-event/:id` | Retrieve a event by ID |
| PATCH | `/update-event/:id` | Update a event by ID |
| DELETE | `/delete-event/:id` | Delete a event by ID |

### Folder
| Method | Endpoint | Description |
|---|---|---|
| POST | `/create-folder` | Create a new folder |
| GET | `/get-all-folders` | Retrieve all folders |
| GET | `/get-folder/:id` | Retrieve a folder by ID |
| PATCH | `/update-folder/:id` | Update a folder by ID |
| DELETE | `/delete-folder/:id` | Delete a folder by ID |

### Gallery
| Method | Endpoint | Description |
|---|---|---|
| POST | `/create-gallery` | Create a new gallery |
| GET | `/get-all-galleries` | Get all galleries |
| GET | `/categories-with-galleries` | Get categories of galleries |
| GET | `/get-gallery/:id` | Get gallery by ID |
| PATCH | `/update-gallery/:id` | Update a gallery by ID |
| DELETE | `/delete-gallery/:id` | Delete a gallery by ID |   

### User
| Method | Endpoint | Description |
|---|---|---|
| POST | `/add-user` | Register a new user |
| POST | `/login` | Authenticate a user |
| DELETE | `/logout` | Log out and clear refresh token |
| GET | `/get-all-users` | Retrieve all users |
| GET | `/get-user-by-id/:id` | Retrieve a user by ID |
| GET | `/get-user-by-email/:email` | Retrieve a user by email |
| PATCH | `/update-user/:id` | Update a user by ID |
| DELETE | `/delete-user/:id` | Delete a user by ID |
| GET | `/refresh_token` | Issue a new access token |

## Environment Variables

See `.env` for required variables.

## Contributing

Raise a PR against the `main` branch. All major commits require a peer review sign-off before merging.