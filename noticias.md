---
layout: default
title: Noticias
permalink: /noticias/
---
<section>
<ul>
{% assign noticiasorden = site.noticias | sort:"order" %}
  {% for noticia in noticiasorden %}
      <h2>{{ noticia.title }}</h2>
      {{ noticia.content }}
  {% endfor %}
</ul>
</section>
