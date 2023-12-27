---
sidebar_position: 2
---

# .env.nextcloud

You should only need to change the `POSTGRES_USER`, `POSTGREST_PASSWORD`, and `OVERWRITEHOST`.

Only change other things if you know what you are doing.

| variable          | value                     | description                                                             | required |
| ----------------- | ------------------------- | ----------------------------------------------------------------------- | -------- |
| POSTGRES_DB       | nextcloud                 | the name of your nextcloud database                                     | true     |
| POSTGRES_USER     | postgres                  | Usename for the nextcloud database                                      | true     |
| POSTGRES_PASSWORD | NextCloudPostgresPassword | Set a secure password for the nextcloud database                        | true     |
| POSTGRES_HOST     | nextcloud-postgres        | The name of the nextcloud postgres docker container - Don't change this | true     |
| OVERWRITEHOST     | cloud.domain.com          | The subdomain for nextcloud                                             | true     |
| OVERWRITEPROTOCOL | https                     | Use SSL - Don't change this                                             | true     |
