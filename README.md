[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19957388&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

## Prerequisites

* Node.js v18+
* npm or yarn
* Postman, Insomnia, or curl

## Setup

1. **Clone Repo**

   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   * Copy `.env.example` to `.env`
   * Update any variables as needed

4. **Start the Server**

   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | /api/products      | Get all products     |
| GET    | /api/products/\:id | Get a product by ID  |
| POST   | /api/products      | Create a new product |
| PUT    | /api/products/\:id | Update a product     |
| DELETE | /api/products/\:id | Delete a product     |

## Query Parameters (GET /api/products)

* `category` — filter by category (e.g. `?category=electronics`)
* `search` — search by name/description (e.g. `?search=laptop`)
* `inStock` — filter by stock status (true/false)
* `page` and `limit` — for pagination (e.g. `?page=2&limit=5`)
* `sort` — sort by price (e.g. `?sort=asc` or `?sort=desc`)

## Middleware

* **Logger** — Logs incoming requests
* **Auth** — Simulated authentication middleware
* **Validation** — Validates request bodies for POST/PUT
* **Error Handler** — Centralized error handling

## Example Request

```bash
POST /api/products
Content-Type: application/json

{
  "name": "Blender",
  "description": "Electric kitchen blender",
  "price": 99.99,
  "category": "kitchen",
  "inStock": true
}
```

## Submission

* Push all changes to your GitHub Classroom repo
* Ensure the following files are included:

  * `server.js`
  * `routes/productRoutes.js`
  * `controllers/productController.js`
  * `middleware/*.js`
  * `.env.example`
  * `README.md`
* Ensure your API works via Postman/Insomnia or `curl`
* Instructor will grade based on functionality, code quality, and completeness
