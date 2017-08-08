---
layout: default
title: Cortometrajes
permalink: cortometrajes/
---

<section>
  {% for corto in site.cortometrajes %}
  <div class="corto">
    <div class="corto-half">
      <h2>{{corto.title}}</h2>
      <p>{{corto.synopsis}}</p>
      <img class="still" src="{{ site.baseurl }}{{ corto.still }}">
      {{ corto.content }}
    </div>
    <div class="director-card">
      <h3>{{corto.director}}</h3>
        <img class="director_image" src="{{ site.baseurl }}{{ corto.director_picture }}">
      <div class="director_social">
        {% if corto.director_facebook %}
          <a href="{{corto.director_facebook}}" target="_blank">
            <div class="social-link facebook">{% include icons/facebook.html %}</div>
          </a>
        {% endif %}
        {% if corto.director_instagram %}
          <a href="{{corto.director_instagram}}" target="_blank">
            <div class="social-link instagram">{% include icons/instagram.html %}</div>
          </a>
        {% endif %}
        {% if corto.director_twitter %}
          <a href="{{ corto.director_twitter }}" target="_blank">
            <div class="social-link">{% include icons/twitter.html %}</div>
          </a>
        {% endif %}
        {% if corto.director_imdb %}
          <a href="{{corto.director_imdb}}" target="_blank">
            <div class="social-link imdb">{% include icons/imdb.html %}</div>
          </a>
        {% endif %}
      </div>
      <p>{{corto.director_bio}}</p>
      {% if corto.codirector %}
        <h3>{{corto.codirector}}</h3>
          <img class="director_image" src="{{ site.baseurl }}{{ corto.codirector_picture }}">
        <div class="director_social">
          {% if corto.codirector_facebook %}
            <a href="{{corto.codirector_facebook}}" target="_blank">
              <div class="social-link facebook">{% include icons/facebook.html %}</div>
            </a>
          {% endif %}
          {% if corto.codirector_instagram %}
            <a href="{{corto.codirector_instagram}}" target="_blank">
              <div class="social-link instagram">{% include icons/instagram.html %}</div>
            </a>
          {% endif %}
          {% if corto.codirector_twitter %}
            <a href="{{ corto.codirector_twitter }}" target="_blank">
              <div class="social-link">{% include icons/twitter.html %}</div>
            </a>
          {% endif %}
          {% if corto.codirector_imdb %}
            <a href="{{corto.codirector_imdb}}" target="_blank">
              <div class="social-link imdb">{% include icons/imdb.html %}</div>
            </a>
          {% endif %}
        </div>
        <p>{{corto.codirector_bio}}</p>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</section>
