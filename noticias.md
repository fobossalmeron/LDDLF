---
layout: default
title: Noticias
permalink: /noticias/
---
<section>
<ul>
{% assign noticiasorden = site.noticias | sort:"order" %}
  {% for noticia in noticiasorden %}
      <a href="{{ noticia.url }}">
        <h3>{{ noticia.title }}</h3>
        <span>{{ noticia.date | date: "%m/%d/%Y" }}</span>
      </a>
      <p>{{ noticia.excerpt | remove: '<p>' | remove: '</p>' }} <a class="leermas" href="{{ noticia.url }}">(Leer más...)</a></p>
  {% endfor %}
</ul>
</section>
