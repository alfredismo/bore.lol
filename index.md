---
layout: default
---

<h2>blog</h2>

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
