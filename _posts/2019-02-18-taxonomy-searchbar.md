--- 
permalink: "taxonomy.html" 
layout: body 
title: ITA Taxonomy Browser with select menu 
published: true 
---

<link rel="stylesheet" type="text/css" href="stylesheets/taxonomy-browser.css">
<script type="text/javascript" src="javascripts/taxonomy-browser.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var BASE_URL = "{{ site.webservices_baseurl }}";
    var API_KEY = "{{ site.apikey }}";
    var divID = "taxonomy_container";
    window.Explorer.renderTaxonomy(BASE_URL, API_KEY, divID);
  });
</script>

<div id="taxonomy_container"></div>
