FROM node:18

WORKDIR /app/
COPY . /app/
RUN npm i --legacy-peer-deps && \
    npm run build
CMD ["npm", "start"]
