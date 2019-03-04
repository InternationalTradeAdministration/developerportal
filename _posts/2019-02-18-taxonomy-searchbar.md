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
    var BASE_URL = "https://api.govwizely.com"; // or other host
    var API_KEY = "SBHWMUxwu9amgwTRx0cnRvXO"; // get it from http://api.trade.gov/
    var divID = "taxonomy_container"; // Or the ID of the div where you'd like it to appear
    window.Explorer.renderTaxonomy(BASE_URL, API_KEY, divID);
  });
</script>

<div id="taxonomy_container"></div>
