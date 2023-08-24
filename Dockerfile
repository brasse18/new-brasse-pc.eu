# Använd en officiell Node.js-bild från Docker Hub som grund
FROM node:14

# Skapa mappar för apparna
RUN mkdir -p /usr/src/app/brasse-pc.eu
RUN mkdir -p /usr/src/app/server

COPY run-all.sh /usr/src/app/run-all.sh

# Kopiera package.json och package-lock.json separat och installera beroenden
COPY brasse-pc.eu/package*.json /usr/src/app/brasse-pc.eu/

COPY server/package*.json /usr/src/app/server/

RUN cd /usr/src/app/brasse-pc.eu/ && npm install
RUN cd /usr/src/app/brasse-pc.eu/ && npm build

RUN cd /usr/src/app/server && npm install

# Kopiera appkod
COPY brasse-pc.eu/ /usr/src/app/brasse-pc.eu/
COPY server/ /usr/src/app/server/

WORKDIR /usr/src/app

# Exponera port 3000 för kommunikation mellan apparna
EXPOSE 3000
# Exponera port 5173 för externt åtkomst
EXPOSE 5173

# Starta apparna när kontainern körs
CMD ["bash", "./run-all.sh"]