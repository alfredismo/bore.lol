---
layout: default
---

<section>
  <p class="bio">memes, música y diseño desde méxico. un sitio hecho a mano, <em>actualizado solo cuando hay algo que decir</em>.</p>
</section>

<section>
  <h2>blog — reciente</h2>
  {% for post in site.posts limit:5 %}
  <a class="entry" href="{{ post.url | relative_url }}"><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>{{ post.title | downcase }}</a>
  {% endfor %}
</section>

<section>
  <h2>links</h2>
  <a class="entry" href="https://github.com/alfredismo">github</a>
  <a class="entry" href="{{ site.x_url | default: 'https://x.com/' }}">x</a>
  <a class="entry" href="{{ site.instagram_url | default: 'https://instagram.com/' }}">instagram</a>
</section>
