# สำหรับ deploy บนโฮสต์ที่รองรับ Docker (Fly.io, Render, Google Cloud Run ฯลฯ)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
