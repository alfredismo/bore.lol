---
layout: design
title: design
---

<div class="gallery">
{% for i in (1..16) %}
  {% assign img = '/assets/design/img' | append: i | append: '.jpg' %}
  <a href="{{ img | relative_url }}" target="_blank" rel="noopener"><img src="{{ img | relative_url }}" alt="design {{ i }}" loading="lazy"></a>
{% endfor %}
</div>
