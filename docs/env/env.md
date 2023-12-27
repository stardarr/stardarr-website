---
sidebar_position: 1
---

# .env

Change the value of all of the following variables to your specific setup.

| variable            | value                                         | description                                                   | required |
| ------------------- | --------------------------------------------- | ------------------------------------------------------------- | -------- |
| DOMAIN              | yourdomain.com                                | Your domain name                                              | true     |
| LETSENCRYPT_EMAIL   | your@email.com                                | Your email address                                            | true     |
| APP_DIRECTORY       | /home/username/apps                           | The base directory for your application configs               | true     |
| DOWNLOAD_DIRECTORY  | /home/username/downloads                      | Services will download files to this folder                   | true     |
| TV_ROOT             | /home/username/tv                             | The folder with your TV content                               | true     |
| HQTV_ROOT           | /home/username/hqtv                           | The folder with your HQTV content                             | true     |
| MOVIE_ROOT          | /home/username/movies                         | The folder with your Movie content                            | true     |
| MUSIC_ROOT          | /home/username/music                          | The folder with your Music content                            | true     |
| BOOK_ROOT           | /home/username/books                          | The folder with your Book content                             | true     |
| TEMP_DATA           | /home/username/tmp                            | Temporary Storage for processing                              | true     |
| NZBGET_USER         | nzbget                                        | Username for NZBGet                                           | true     |
| NZBGET_PASS         | nzbgetPassword                                | Password for NZBGet                                           | true     |
| FIRESHARE_DATA      | /home/username/apps/fireshare/data            | Fireshare config folder                                       | true     |
| FIRESHARE_PROCESSED | /home/username/webstorage/fireshare/processed | Fireshare temp folder                                         | true     |
| FIRESHARE_VIDEOS    | /home/username/webstorage/fireshare/videos    | Fireshare videos folder                                       | true     |
| EXTERNAL_DOMAIN     | your-other-domain.com                         | A second domain to send to an external host                   | false    |
| EXTERNAL_IP         | your-other-domain.com                         | The IP of the external host                                   | false    |
| TZ                  | America/Los_Angeles                           | Your Timezone                                                 | true     |
| PUID                | 1000                                          | User ID - Don't change this unless you know what youre doing  | true     |
| PGID                | 1000                                          | Group ID - Don't change this unless you know what youre doing | true     |
| VERSION             | "docker"                                      | Tells Plex that it is dockerized, don't change this           | true     |
