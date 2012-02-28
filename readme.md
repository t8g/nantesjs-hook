* Slides de la présentation hook.io
* Exemple final

Penser à récupérer les modules nécessaires
npm install hook.io
npm install hook.io-cron
npm install mailer
npm install ntwitter

Note : pour un pb de compatiblité, il faut changer la version de hook.io dans hook.io-cron
"hook.io" : ">= 0.8.7"

Pour l'exemple, penser à modifier

mail.conf.json
{
  "host" : "xxxxxx",
  "port" : "25", // 465 pour gmail, par exemple
  "ssl": true,
  "to" : "xxxx@xxx",
  "from" : "xxxw@xxxx",
  "authentication" : "login",
  "username" : "xxxxx",
  "password" : "xxxxx"
}

et twitter.conf.json (enregistrer l'appli sur dev.twitter.com)
{
    "consumer_key" : "xxxx",
    "consumer_secret" : "xxxx",
    "access_token_key" : "xxxx",
    "access_token_secret" : "xxxx"
}