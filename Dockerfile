# Use an official Node.js runtime as a parent image with a version that satisfies Next.js requirements
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files from the my-app directory
COPY my-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code from the my-app directory
COPY my-app/ ./

# Build your Next.js application
RUN npm run build

# Command to run your app
CMD ["npm", "start"]
