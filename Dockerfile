FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run build

# Copy public directory containing robots.txt and sitemap.xml
COPY public/ ./public/

# Copy source files including sitemap.ts
COPY src/ ./src/

# -- Production image --
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV MONGODB_URI=mongodb+srv://websitedata0102:websitedata123@hikvision.jbxnk.mongodb.net/?retryWrites=true&w=majority&appName=hikvision
ENV NEXT_PUBLIC_API_URL=https://hikvisionuae.ae
ENV NEXT_PUBLIC_UPLOAD_DIR=/uploads
ENV JWT_SECRET=44c02613bd332db7e1aab9a04e5688008367129fd948f07825b17d556c07dae5640c3eb8b6f56e2ae8855f9e215890899c8e81f09dba2dcff5d38d7f0f5e3ea7hikisidb
ENV CLOUDINARY_CLOUD_NAME=websitedata123
ENV CLOUDINARY_API_KEY=418888735981265
ENV CLOUDINARY_API_SECRET=5KGo0fBnFqWOVtVNsugW3rDUT8o

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 8080
CMD ["npm", "run", "start"]
