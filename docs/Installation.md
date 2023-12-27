---
sidebar_position: 3
---

# Installation

## Step 1 - Clone the repository

```bash
git clone https://github.com/stardarr/stardarr
```

## Step 2 - Create the Docker Networks

```bash
docker network create internal_network
docker network create web
```

## A word about .env files

Each service has a folder with a `.env.example`.

Make a copy of this file in the same folder and name it `.env`

Modify the `.env` file with your local paths, URLs, and other required items in each file.

For specific details on each environment variable. See the Services section of this documentation.

## Step 3 - Start CloudflareDDNS

```bash
cd CloudflareDDNS
cp .env.example .env # Copy the example environment file
nano .env # Edit the .env file with your configurations
docker compose up -d # Start the service
```

## Step 4 - Start Traefik

```bash
cd Traefik
cp .env.example .env
nano .env # Remember to replace the values with your own settings
docker compose up -d
```

## Step 5 - Start Other Services

After CloudflareDDNS and Traefik are running, you can start the rest of the services in any order you'd like.

For each service:

- Ensure to create and modify the `.env` file.
- Replace `<Service Name>` with the actual name of the service.

```bash
cd <Service Name>
cp .env.example .env
nano .env # Customize your configuration
docker compose up -d
```
