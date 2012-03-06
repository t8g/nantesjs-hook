# Présentation HOOK.IO // NantesJS // Fév. 2012

* Slides de la présentation hook.io ( réalisée avec shower : https://github.com/pepelsbey/shower )
* Exemple final (rép hook.io)

## Pour l'exemple

Penser à récupérer les modules nécessaires
<pre><code>
npm install hook.io
npm install hook.io-cron
npm install mailer
npm install ntwitter
</code></pre>

Note : pour un pb de compatiblité, il faut changer la version de hook.io dans hook.io-cron
<pre><code>
"hook.io" : ">= 0.8.7"
</code></pre>

Et penser à modifier

<pre><code>
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
</code></pre>

et twitter.conf.json (enregistrer l'appli sur dev.twitter.com)
<pre><code>
{
    "consumer_key" : "xxxx",
    "consumer_secret" : "xxxx",
    "access_token_key" : "xxxx",
    "access_token_secret" : "xxxx"
}
</code></pre>
