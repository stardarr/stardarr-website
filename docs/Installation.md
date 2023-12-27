---
sidebar_position: 3
---

# Installation

## Step 1 - Clone the repository

```
git clone https://github.com/stardarr/stardarr
```

## Step 2 - Edit the .env files

There are 3 .env files in this project that need to be updated.

- [.env](/docs/env/)
- [.env.cloudflare](/docs/env/env-cf)
- [.env.nextcloud](/docs/env/env-nc)

## Step 3 - Start the services

```
cd stardarr
docker-compose up -d
```
