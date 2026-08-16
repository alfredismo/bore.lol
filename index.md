---
layout: default
---

<section>
  <p class="bio">alfredo, bore(d), mem(explorer), artist. <em>[better call memetic]</em></p>
</section>

<section>
  <h2>blog</h2>
  {% for post in site.posts limit:5 %}
  <a class="entry" href="{{ post.url | relative_url }}"><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>{{ post.title | downcase }}</a>
  {% endfor %}
</section>
