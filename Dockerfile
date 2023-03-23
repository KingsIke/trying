FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN  yarn install


COPY next.config.js ./next.config.js


COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY components  ./components
COPY sanity ./sanity
COPY utils ./utils



CMD ["npm", "dev"]
