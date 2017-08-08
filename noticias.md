---
layout: default
title: Noticias
permalink: noticias/
---
<section>
{% assign noticiasorden = site.noticias | sort:"order" %}
  {% for noticia in noticiasorden %}
      {% if noticia.external_link %}
        <a href="http://{{ noticia.external_link }}">
      {% else %}
        <a href="{{ noticia.url }}">
      {% endif %}
        <h3>{{ noticia.title }}</h3>
        <span>{{ noticia.date | date: "%m/%d/%Y" }}</span>
      </a>
      <p>{{ noticia.excerpt | remove: '<p>' | remove: '</p>' }}
      {% if noticia.external_link %}
        <a class="leermas" href="http://{{ noticia.external_link }}">(Leer más...)
      {% else %}
        <a class="leermas" href="{{ noticia.url }}">(Leer más...)
      {% endif %}
        </a>
      </p>
  {% endfor %}
</section>
