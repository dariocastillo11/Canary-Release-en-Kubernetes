FROM node:18-alpine

WORKDIR /app

# Copiar primero solo package.json si lo tienes
COPY app2.js /app/
COPY index.html /app/
COPY styles.css /app/
COPY index-v2.html /app/
COPY styles-v2.css /app/

EXPOSE 80

CMD ["node", "app2.js"]