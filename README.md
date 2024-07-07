# Edu-City Platform

My Education Platform is an online platform that offers educational tracks in the field of IT. Each track consists of a series of courses, and each course contains a series of lessons. The platform helps students identify the appropriate track, follow all the courses within the track in the correct order, and receive continuous guidance and interaction to ensure mastery of the material.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Additional Tips](#additional-tips)

## Features

- User authentication and management
- Track and course management
- Lesson management with video and title
- Progress tracking for users

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmoudramy84/Express.js_MongoDB_education-platform.git
   cd Express.js_MongoDB_education-platform

2. Install dependencies:

   ```bash
   npm install

3. Set up MongoDB:

- If you are using MongoDB locally, make sure it's running on mongodb://localhost:27017.
- If you are using MongoDB Atlas, update the connection string in server.js.

## Running the Application

1. Start the server:

   ```bash
   node server.js

2. The server will be running on http://localhost:3000.

# API Documentation

## Base URL
http://localhost:3000

## Authentication
- **None** (Note: Authentication should be added for production use)

---

## Endpoints

### Courses

#### Get All Courses
GET /courses


**Response:**
```json
[
    {
        "_id": "60d0fe4f5311236168a109ca",
        "title": "Course Title",
        "description": "Course Description",
        "track": "60d0fe4f5311236168a109cb",
        "lessons": "60d0fe4f5311236168a109cc"
    },
    ...
]

Get Course by ID

GET /courses/:id
Parameters:

id (String): Course ID
Response:

json
{
    "_id": "60d0fe4f5311236168a109ca",
    "title": "Course Title",
    "description": "Course Description",
    "track": "60d0fe4f5311236168a109cb",
    "lessons": "60d0fe4f5311236168a109cc"
}

Create a New Course

POST /courses
Body:

json
{
    "title": "Course Title",
    "description": "Course Description",
    "track": "60d0fe4f5311236168a109cb",
    "lessons": "60d0fe4f5311236168a109cc"
}
Response:

json
{
    "_id": "60d0fe4f5311236168a109ca",
    "title": "Course Title",
    "description": "Course Description",
    "track": "60d0fe4f5311236168a109cb",
    "lessons": "60d0fe4f5311236168a109cc"
}

Update a Course

PUT /courses/:id
Parameters:

id (String): Course ID
Body:

json
{
    "title": "Updated Course Title",
    "description": "Updated Course Description",
    "track": "60d0fe4f5311236168a109cb",
    "lessons": "60d0fe4f5311236168a109cc"
}
Response:

json
{
    "_id": "60d0fe4f5311236168a109ca",
    "title": "Updated Course Title",
    "description": "Updated Course Description",
    "track": "60d0fe4f5311236168a109cb",
    "lessons": "60d0fe4f5311236168a109cc"
}

Delete a Course

DELETE /courses/:id
Parameters:

id (String): Course ID
Response:

json
{
    "message": "Course deleted"
}

Lessons

Get All Lessons

GET /lessons
Response:

json
[
    {
        "_id": "60d0fe4f5311236168a109cd",
        "title": "Lesson Title",
        "video": "http://example.com/video.mp4",
        "course": "60d0fe4f5311236168a109ca"
    },
    ...
]

Get Lesson by ID

GET /lessons/:id
Parameters:

id (String): Lesson ID
Response:

json
{
    "_id": "60d0fe4f5311236168a109cd",
    "title": "Lesson Title",
    "video": "http://example.com/video.mp4",
    "course": "60d0fe4f5311236168a109ca"
}

Create a New Lesson

POST /lessons
Body:

json
{
    "title": "Lesson Title",
    "video": "http://example.com/video.mp4",
    "course": "60d0fe4f5311236168a109ca"
}
Response:

json
{
    "_id": "60d0fe4f5311236168a109cd",
    "title": "Lesson Title",
    "video": "http://example.com/video.mp4",
    "course": "60d0fe4f5311236168a109ca"
}

Update a Lesson

PUT /lessons/:id
Parameters:

id (String): Lesson ID
Body:

json
{
    "title": "Updated Lesson Title",
    "video": "http://example.com/updated_video.mp4",
    "course": "60d0fe4f5311236168a109ca"
}
Response:

json
{
    "_id": "60d0fe4f5311236168a109cd",
    "title": "Updated Lesson Title",
    "video": "http://example.com/updated_video.mp4",
    "course": "60d0fe4f5311236168a109ca"
}

Delete a Lesson

DELETE /lessons/:id
Parameters:

id (String): Lesson ID
Response:

json
{
    "message": "Lesson deleted"
}

Tracks

Get All Tracks

GET /tracks
Response:

json
[
    {
        "_id": "60d0fe4f5311236168a109ce",
        "name": "Track Name",
        "description": "Track Description",
        "courses": ["60d0fe4f5311236168a109ca", "60d0fe4f5311236168a109cb"]
    },
    ...
]

Create a New Track

POST /tracks
Body:

json
{
    "name": "Track Name",
    "description": "Track Description",
    "courses": ["60d0fe4f5311236168a109ca", "60d0fe4f5311236168a109cb"]
}
Response:

json
{
    "_id": "60d0fe4f5311236168a109ce",
    "name": "Track Name",
    "description": "Track Description",
    "courses": ["60d0fe4f5311236168a109ca", "60d0fe4f5311236168a109cb"]
}

Users

Get All Users

GET /users
Response:

json
[
    {
        "_id": "60d0fe4f5311236168a109cf",
        "name": "User Name",
        "email": "user@example.com",
        "password": "hashedpassword",
        "role": "user",
        "tracks": ["60d0fe4f5311236168a109ce"]
    },
    ...
]

Create a New User

POST /users
Body:

json
{
    "name": "User Name",
    "email": "user@example.com",
    "password": "plaintextpassword",
    "role": "user",
    "tracks": ["60d0fe4f5311236168a109ce"]
}
Response:

json
{
    "_id": "60d0fe4f5311236168a109cf",
    "name": "User Name",
    "email": "user@example.com",
    "password": "hashedpassword",
    "role": "user",
    "tracks": ["60d0fe4f5311236168a109ce"]
}

Error Handling
All endpoints return errors in the following format if there is an issue:

json
{
    "errors": [
        {
            "msg": "Error message",
            "param": "field",
            "location": "body/param"
        }
    ]
}

## Additional Tips
- Agile Methodology: Consider using agile practices like Scrum or Kanban for project management.
- Collaboration Tools: Utilize tools like Slack, Jira, or Trello for team collaboration and project tracking.
