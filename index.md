---
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/mem-explorer.css' | relative_url }}">

<section class="mem-explorer">
  <div class="mem-explorer__header">
    <h2>mem[explorer]</h2>
    <span class="mem-explorer__label">weekly edit archive</span>
  </div>

  <a class="mem-explorer__week" href="{{ '/mem-explorer/sub_week001/' | relative_url }}">
    <span>sub_week001</span>
    <span>7 edits →</span>
  </a>
</section>

## blog

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
