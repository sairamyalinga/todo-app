# Project Based Learning
## Overview 

This is a simple To-Do application built using Node.js. It allows users to add tasks, view a list of tasks, and delete tasks. The app uses MongoDB as the database for task storage.

## Technologies Used

- **Node.js**: The application is built using Node.js, a JavaScript runtime.
- **Express.js**: Express is used as the web application framework for Node.js.
- **MongoDB**: MongoDB is employed as the database to store tasks.
- **Docker**: Docker is used for containerization, making it easy to deploy the application in different environments.
- **GitHub Actions**: GitHub Actions is used for continuous integration, automating the testing process whenever changes are pushed to the repository.

#### Deployment Process

1. **Push to GitHub:**
   - Any push to the main branch triggers GitHub Actions workflows.

2. **Continuous Integration:**
   - GitHub Actions runs tests and ensures code quality.

3. **Automated Deployment:**
   - Upon successful tests, the deployment workflow securely transfers the application to the Digital Ocean droplet(server where the application is deployed).

4. **Live Application:**
   - The application is now live and accessible at [https://sairamya.tech](https://sairamya.tech).Feel free to explore and interact with the live version of the To-Do app.


## How to Run the App

### Prerequisites

- Install Node.js: [https://nodejs.org/](https://nodejs.org/)
- Install Docker: [https://www.docker.com/get-started](https://www.docker.com/get-started)

### Steps

1. Clone the repository using git clone.
2. Go to the project directory.
3.  Run the docker container `docker-compose up -d` to run the application.
   
