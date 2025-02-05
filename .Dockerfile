FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install --production


COPY next.config.js ./next.config.js


COPY pages ./pages
COPY public ./public
COPY styles ./styles

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
