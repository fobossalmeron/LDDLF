---
layout: default
title: Cortometrajes
permalink: /cortometrajes/
---

<section>
  {% for corto in site.cortometrajes %}
    <div class="corto-half">
      <h2>{{corto.title}}</h2>
      <p>{{corto.synopsis}}</p>
      <img class="still" src="{{ site.baseurl }}{{ corto.still }}">
      {{ corto.content }}
    </div>
    <div class="director-card">
      <h3>{{corto.director}}</h3>
      <a href="{{ corto.director_link }}">
        <img class="director_image" src="{{ site.baseurl }}{{ corto.director_picture }}">
      </a>
      <p>{{corto.director_bio}}</p>
      {% if corto.codirector %}
        <h3>{{corto.codirector}}</h3>
        <a href="{{ corto.codirector_link }}">
          <img class="director_image" src="{{ site.baseurl }}{{ corto.codirector_picture }}">
        </a>
        <p>{{corto.codirector_bio}}</p>
      {% endif %}
    </div>
  {% endfor %}
</section>
