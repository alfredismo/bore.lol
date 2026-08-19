---
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/mem-explorer.css' | relative_url }}">

<section class="mem-explorer mem-explorer--home">
  <div class="mem-explorer__header">
    <h2>mem[explorer]</h2>
    <span class="mem-explorer__label">weekly edit archive</span>
  </div>

  <div class="mem-carousel" aria-label="carrusel de edits sub week001">
    <a class="mem-carousel__slide" href="{{ '/mem-explorer/sub_week001/' | relative_url }}"><img src="{{ '/assets/img/mem-explorer/sub_week001/better%20call%20memetic.jpg' | relative_url }}" alt="Better Call Memetic"></a>
    <a class="mem-carousel__slide" href="{{ '/mem-explorer/sub_week001/' | relative_url }}"><img src="{{ '/assets/img/mem-explorer/sub_week001/back%20to%20the%20slopaganda.jpg' | relative_url }}" alt="Back to the Slopaganda"></a>
    <a class="mem-carousel__slide" href="{{ '/mem-explorer/sub_week001/' | relative_url }}"><img src="{{ '/assets/img/mem-explorer/sub_week001/master%20of%20the%20slopaganda.jpg' | relative_url }}" alt="Master of the Slopaganda"></a>
    <a class="mem-carousel__slide" href="{{ '/mem-explorer/sub_week001/' | relative_url }}"><img src="{{ '/assets/img/mem-explorer/sub_week001/slopbocop.jpg' | relative_url }}" alt="Slopbocop"></a>
    <a class="mem-carousel__slide" href="{{ '/mem-explorer/sub_week001/' | relative_url }}"><img src="{{ '/assets/img/mem-explorer/sub_week001/slopaganda%20strikes%20back.jpg' | relative_url }}" alt="The Slopaganda Strikes Back"></a>
    <a class="mem-carousel__slide" href="{{ '/mem-explorer/sub_week001/' | relative_url }}"><img src="{{ '/assets/img/mem-explorer/sub_week001/the%20slopsons.png' | relative_url }}" alt="The Slopsons"></a>
    <a class="mem-carousel__slide mem-carousel__slide--pending" href="{{ '/mem-explorer/sub_week001/' | relative_url }}"><span>edit_07</span></a>
  </div>

  <a class="mem-explorer__week" href="{{ '/mem-explorer/sub_week001/' | relative_url }}">
    <span>sub_week001 — archivo completo</span>
    <span>→</span>
  </a>
</section>

<h2>blog</h2>

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
