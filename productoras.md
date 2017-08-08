---
layout: default
title: Productoras
permalink: productoras/
productoras:
  - nombre: Reflekto Kreativo
    descripcion: >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    img: reflekto.svg
  - nombre: Kaptura Projects
    descripcion: >
      Kaptura Projects nace de los deseos de un grupo de jóvenes cineastas que buscan generar proyectos relevantes. A través de la confianza depositada en jóvenes artistas para el desarrollo de los proyectos, escuchando las necesidades de los nuevos creativos para dar resultados frescos, innovadores y actualizados.
    link: http://kapturaprojects.com/
    facebook: https://www.facebook.com/kapturaprojects/
    instagram: https://www.instagram.com/kapturaprojectsmx/
    img: kaptura.svg
  - nombre: Bala Films
    descripcion: >
      <b>Bala Films</b> es una familia dedicada a la realización de obras cinematográficas y proyectos audiovisuales. Nuestros trabajos han sido seleccionados en diversos festivales nacionales e internacionales tales como:<br>
      <b>FICM</b> (Festival Internacional de Cine de Morelia)<br>
      <b>FICG</b> (Festival Internacional de Cine de Guadalajara)<br>
      <b>FICUNAM</b> (Festival Internacional de Cine UNAM)<br>
      <b>GIFF</b> (Guanajuato International Film Festival)<br>
      <b>FIC MONTERREY</b> (Festival Internacional de Cine de Monterrey)<br>
      Short Shorts Film Festival<br>
      Festival de Cine Iquique Chile<br>
      New York Independent Film Festival<br>
      12 Months Film Festival Rumania<br>
      Lakino Film Festival Berlin<br>
      <b>FESAALP</b> (Festival de Cine Latinoamericano de la Plata)<br>
      <b>FICA</b> (Festival Internacional de Cine de Acapulco)<br>
      <b>FicAgs</b> (Festival Internacional de Cine de Aguascalientes)<br>
    link: https://www.facebook.com/balafilmsmx/
    facebook: https://www.facebook.com/balafilmsmx/
    instagram: https://www.instagram.com/balafilms/
    twitter: https://twitter.com/balafilmsmx
    img: bala.svg
  - nombre: Educadores Sin Fronteras
    descripcion: >
      Educadores sin fronteras, A.C. es una organización no gubernamental, autónoma, sin fines de lucro, que desarrolla y fomenta programas académicos y culturales, así como publicaciones e investigaciones con el objetivo de mejorar la educación en México.
      Las temáticas de nuestros programas son: prevención de la violencia, ética, cívica, lectura, cultura de la legalidad, equidad de género, participación social, didáctica, psicología, gestión de conflictos, mediación, inteligencia emocional y justicia.
    link: http://www.educadoressinfronteras.mx/
    img: educadores.svg
---
<section>
  {% for productora in page.productoras %}
  <div class="productora">
  <a href="{{productora.link}}" target="_blank">
    <h2>{{productora.nombre}}</h2>
    <img class="productoras_logo" src="/img/productoras/{{productora.img}}">
  </a>
  <p>{{productora.descripcion}}</p>
  {% if productora.mail %}
    <a href="mailto:{{productora.mail}}" target="_blank">
      <div class="social-link instagram">{% include icons/mail.html %}</div>
    </a>
  {% endif %}
  {% if productora.facebook %}
    <a href="{{productora.facebook}}" target="_blank">
      <div class="social-link facebook">{% include icons/facebook.html %}</div>
    </a>
  {% endif %}
  {% if productora.instagram %}
    <a href="{{productora.instagram}}" target="_blank">
      <div class="social-link instagram">{% include icons/instagram.html %}</div>
    </a>
  {% endif %}
  {% if productora.twitter %}
    <a href="{{productora.twitter}}" target="_blank">
      <div class="social-link twitter">{% include icons/twitter.html %}</div>
    </a>
  {% endif %}
  {% endfor %}
</div>
