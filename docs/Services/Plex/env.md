---
sidebar_position: 2
---

# Environment Variables

| Variable         | Value                       | Description                                                       |
| ---------------- | --------------------------- | ----------------------------------------------------------------- |
| DOMAIN           | plex.domain.com             | The domain or subdomain to access your plex server                |
| CONFIG_DIRECTORY | /path/to/plex/config        | The path to your plex config                                      |
| TV_LIBRARY       | /path/to/your/tv/library    | The path to your root TV directory                                |
| HQTV_LIBRARY     | /path/to/your/hqtv/library  | An (optional) HQTV library that does not get processed by Unmanic |
| MOVIE_LIBRARY    | /path/to/your/movie/library | The path to your root Movies directory                            |
| MUSIC_LIBRARY    | /path/to/your/music/library | The path to your root Music directory                             |
| TZ               | Etc/UTC                     | The timezone the service will use                                 |
| PUID             | 1000                        | User ID - Don't change this unless you know what you're doing     |
| PGID             | 1000                        | Group ID - Don't change this unless you know what you're doing    |
| VERSION          | docker                      | This tells plex it's dockerized, don't change it                  |
