# BrainBytes API Documentation

This document provides comprehensive information about the BrainBytes backend API, including endpoints, database schema, and AI implementation details.

## Table of Contents

- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [AI Implementation](#ai-implementation)

## API Endpoints

### Authentication

The API uses session-based authentication implemented through the `better-auth` library. All protected endpoints require a valid session.

### Material Endpoints

#### Get All Materials

- **Endpoint**: `GET /api/materials`
- **Authentication**: Required
- **Description**: Retrieves all learning materials for the authenticated user.
- **Response**: List of materials with their associated text entries.
- **Status Codes**:
  - 200: Success
  - 401: Unauthorized
  - 500: Server error

#### Get Single Material

- **Endpoint**: `GET /api/materials/:id`
- **Authentication**: Required
- **Description**: Retrieves a specific material by ID for the authenticated user.
- **Response**: Material object with text entries.
- **Status Codes**:
  - 200: Success
  - 401: Unauthorized
  - 404: Material not found
  - 500: Server error

#### Create Material

- **Endpoint**: `POST /api/materials`
- **Authentication**: Required
- **Description**: Creates a new learning material.
- **Request Body**:
  ```json
  {
    "title": "String (required)",
    "description": "String (required)",
    "subject": "String (required)",
    "isActive": "Boolean (optional)"
  }
  ```
- **Response**: The created material object.
- **Status Codes**:
  - 201: Created
  - 400: Bad request (missing fields)
  - 401: Unauthorized
  - 500: Server error

#### Update Material

- **Endpoint**: `PUT /api/materials/:id`
- **Authentication**: Required
- **Description**: Updates an existing material. If `isActive` is set to true, all other materials will be deactivated.
- **Request Body**:
  ```json
  {
    "title": "String (optional)",
    "description": "String (optional)",
    "subject": "String (optional)",
    "isActive": "Boolean (optional)"
  }
  ```
- **Response**: The updated material object.
- **Status Codes**:
  - 200: Success
  - 400: Bad request (empty fields)
  - 401: Unauthorized
  - 404: Material not found
  - 500: Server error

#### Delete Material

- **Endpoint**: `DELETE /api/materials/:id`
- **Authentication**: Required
- **Description**: Deletes a material and all associated text entries.
- **Response**: Success confirmation.
- **Status Codes**:
  - 200: Success
  - 401: Unauthorized
  - 500: Server error

### Text Entry Endpoints

#### Get Text Entries for Material

- **Endpoint**: `GET /api/materials/:materialId/entries`
- **Authentication**: Required
- **Description**: Retrieves all text entries for a specific material.
- **Response**: Array of text entry objects.
- **Status Codes**:
  - 200: Success
  - 401: Unauthorized
  - 404: Material not found
  - 500: Server error

#### Add Text Entry

- **Endpoint**: `POST /api/materials/:materialId/entries`
- **Authentication**: Required
- **Description**: Adds a new text entry to a material.
- **Request Body**:
  ```json
  {
    "title": "String (required)",
    "content": "String (required)"
  }
  ```
- **Response**: The created text entry object.
- **Status Codes**:
  - 201: Created
  - 400: Bad request (missing fields)
  - 401: Unauthorized
  - 404: Material not found
  - 500: Server error

#### Update Text Entry

- **Endpoint**: `PUT /api/materials/:materialId/entries/:entryId`
- **Authentication**: Required
- **Description**: Updates an existing text entry.
- **Request Body**:
  ```json
  {
    "title": "String (optional)",
    "content": "String (optional)"
  }
  ```
- **Response**: The updated text entry object.
- **Status Codes**:
  - 200: Success
  - 400: Bad request (empty fields)
  - 401: Unauthorized
  - 404: Material or entry not found
  - 500: Server error

#### Delete Text Entry

- **Endpoint**: `DELETE /api/materials/:materialId/entries/:entryId`
- **Authentication**: Required
- **Description**: Deletes a text entry from a material.
- **Response**: Success confirmation.
- **Status Codes**:
  - 200: Success
  - 401: Unauthorized
  - 404: Material or entry not found
  - 500: Server error

### Subject Endpoints

#### Get All Subjects

- **Endpoint**: `GET /api/subjects`
- **Authentication**: Required
- **Description**: Retrieves all subjects created by the authenticated user.
- **Response**: Array of subject objects.
- **Status Codes**:
  - 200: Success
  - 401: Unauthorized
  - 500: Server error

#### Create Subject

- **Endpoint**: `POST /api/subjects`
- **Authentication**: Required
- **Description**: Creates a new subject.
- **Request Body**:
  ```json
  {
    "name": "String (required)"
  }
  ```
- **Response**: The created subject object.
- **Status Codes**:
  - 201: Created
  - 400: Bad request (missing fields)
  - 401: Unauthorized
  - 500: Server error

### Chat Endpoint

#### Interactive Chat

- **Endpoint**: `POST /api/chat`
- **Authentication**: Required
- **Description**: Streams a chat response based on user messages and active learning material.
- **Request Body**:
  ```json
  {
    "messages": [CoreMessage[]]
  }
  ```
- **Response**: Streamed text response from the AI model.
- **Status Codes**:
  - 200: Success (streaming)
  - 401: Unauthorized
  - 500: Server error

## Database Schema

The BrainBytes database uses PostgreSQL with the Drizzle ORM for schema management and queries.

### Tables

#### `users` Table

Handled by the authentication system (better-auth).

#### `materials` Table

Stores learning materials created by users.

| Column      | Type      | Description                                      |
| ----------- | --------- | ------------------------------------------------ |
| id          | UUID      | Primary key, auto-generated                      |
| title       | Text      | Title of the material                            |
| description | Text      | Description of the material                      |
| subject     | Text      | Subject category                                 |
| isActive    | Boolean   | Whether this is the active material for the user |
| dateAdded   | Timestamp | Creation date, auto-generated                    |
| userId      | Text      | Foreign key to user table                        |

#### `material_text_entries` Table

Stores content chunks for learning materials.

| Column     | Type      | Description                    |
| ---------- | --------- | ------------------------------ |
| id         | UUID      | Primary key, auto-generated    |
| materialId | UUID      | Foreign key to materials table |
| title      | Text      | Title of the text entry        |
| content    | Text      | Content of the text entry      |
| dateAdded  | Timestamp | Creation date, auto-generated  |

#### `subjects` Table

Stores subject categories created by users.

| Column | Type | Description                    |
| ------ | ---- | ------------------------------ |
| id     | UUID | Primary key, auto-generated    |
| name   | Text | Subject name (unique for user) |
| userId | Text | Foreign key to user table      |

### Relationships

- One user can have many materials
- One user can have many subjects
- One material can have many text entries
- Each material and subject belongs to a single user

## AI Implementation

BrainBytes integrates OpenAI's model through the AI SDK to provide an intelligent tutoring experience.

### Chat Implementation Highlights

1. **Context Awareness**: The AI system contextualizes responses based on the user's active learning material.

2. **Material Integration**: When a user has an active material, the AI receives:

   - Material title and subject
   - All text entries related to the material
   - Instructions to focus teaching on the provided material content

3. **Streaming Response**: Responses are streamed in real-time using Hono's streaming capabilities combined with the AI SDK's `streamText` function.

4. **System Instructions**: The AI receives detailed instructions to:

   - Identify as "BrainBytes AI"
   - Reference the current date/time and user information
   - Create engaging learning activities (Q&A, true/false questions, fill-in-the-blank exercises)
   - Structure responses based on the learning material context

5. **Progressive Learning**: The AI is guided to help users learn step-by-step, starting with fundamentals and progressing to more complex aspects of the material.

6. **Fallback Behavior**: When no material is active, the AI prompts the user to activate learning material from the materials sidebar.

### Technical Implementation

The chat system uses:

- OpenAI's `gpt-4.1-mini` model
- AI SDK's `streamText` for response generation
- Hono's streaming capabilities for real-time delivery
- Custom prompting to shape the AI's educational approach
