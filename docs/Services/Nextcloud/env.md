---
sidebar_position: 2
---

# Environment Variables

| Variable           | Value                      | Description                                                    |
| ------------------ | -------------------------- | -------------------------------------------------------------- |
| DOMAIN             | cloud.domain.com           | The domain or subdomain to access your nextcloud instance      |
| POSTGRES_DB        | nextcloud                  | The name of your nextcloud database                            |
| POSTGRES_USER      | postgres                   | The name of the nextcloud db postgres user                     |
| POSTGRES_PASSWORD  | NextCloudPostgresPassword  | The nextcloud db postgres password                             |
| POSTGRES_HOST      | nextcloud-postgres         | The host (container) of the postgres database                  |
| OVERWRITEHOST      | cloud.domain.com           | Use the same domain as earlier, this is for Nextcloud's config |
| OVERWRITEPROTOCOL  | https                      | SSL or no                                                      |
| STORAGE_DIRECTORY  | /path/to/nextcloud/storage | The path to your Nextcloud storage directory                   |
| DATABASE_DIRECTORY | /path/to/nextcloud/db      | The path to your Nextcloud database directory                  |
