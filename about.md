---
layout: default
title: Noticias
permalink: /noticias/
---

Aquí deben estar noticias

<ul>
{% assign noticiasorden = site.noticias | sort:"order" %}
  {% for noticia in noticiasorden %}
    <li{% if page.title == noticia.title %} class= "active" {% endif %}>
      <a href="{{ noticia.url }}">{{ noticia.title }}</a>
    </li>
  {% endfor %}
</ul>
