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
      <div class="trailer-container">
        <iframe src="https://player.vimeo.com/video/{{corto.trailerid}}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      {{ corto.content }}
    </div>
    <div class="director-card">
      {% for director in corto.directors %}
      <h3>{{director.name}}</h3>
        <img class="director_image" src="/{{ director.img }}">
      <div class="director_social">
        {% if director.facebook %}
          <a href="{{ director.facebook }}" target="_blank">
            <div class="social-link facebook">{% include icons/facebook.html %}</div>
          </a>
        {% endif %}
        {% if director.instagram %}
          <a href="{{ director.instagram }}" target="_blank">
            <div class="social-link instagram">{% include icons/instagram.html %}</div>
          </a>
        {% endif %}
        {% if director.twitter %}
          <a href="{{ director.twitter }}" target="_blank">
            <div class="social-link">{% include icons/twitter.html %}</div>
          </a>
        {% endif %}
        {% if director.imdb %}
          <a href="{{ director.imdb }}" target="_blank">
            <div class="social-link imdb">{% include icons/imdb.html %}</div>
          </a>
        {% endif %}
        {% if director.mail %}
          <a href="mailto:{{ director.mail }}" target="_blank">
            <div class="social-link instagram">{% include icons/mail.html %}</div>
          </a>
        {% endif %}
      </div>
      <p>{{ director.bio }}</p>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</section>
