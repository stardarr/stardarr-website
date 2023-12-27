---
sidebar_position: 3
---

# Letsencrypt

Let's Encrypt is a free, automated, and open certificate authority brought to you by the nonprofit Internet Security Research Group (ISRG).

# Storing the Certificate

The compose.yaml is configured to store the letsencrypt certificate in the same folder it is executed in. You can change this to a more explicit path by updating the local volume path within the compose.yaml. If you prefer, you may set this as an environment variable and update your `.env` instead.
