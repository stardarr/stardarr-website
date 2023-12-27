---
sidebar_position: 3
---

# .env.cloudflare

You should only need to change the `API_KEY` and `ZONE`.

Only change other things if you know what you are doing.

| variable  | value                     | description                         | required |
| --------- | ------------------------- | ----------------------------------- | -------- |
| API_KEY   | your cloudflare API token | API token with Edit DNS permissions | true     |
| ZONE      | domain.com                | Usename for the nextcloud database  | true     |
| SUBDOMAIN |                           | Leave this blank unless you need it | true     |
| PROXIED   | true                      | Is this proxied in CloudFlare?      | true     |
