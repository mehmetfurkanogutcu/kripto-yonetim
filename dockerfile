# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . ./

# Install dependencies
RUN yarn install

# Build the application
RUN yarn build

# Expose the port number
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
