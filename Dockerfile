# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build the static site
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Thay đổi port mặc định của Nginx từ 80 sang 4321 để tránh trùng lặp
RUN sed -i 's/listen       80;/listen       4321;/g' /etc/nginx/conf.d/default.conf

# Copy built static files from build stage to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 4321 inside the container
EXPOSE 4321

CMD ["nginx", "-g", "daemon off;"]
