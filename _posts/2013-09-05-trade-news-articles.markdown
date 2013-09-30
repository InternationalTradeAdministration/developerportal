---
permalink: "trade-news-articles.html"
layout: template
title: "Trade News & Articles"
---

##Trade News & Articles

The Trade News & Articles API provides in-depth news and articles written by Trade Specialists working in the Federal government.  The news and articles are categorized by industry, country, and topic area.  Developers can use this API to provide exporters with the latest insights into their industry and into the countries with which they would like to do business.

JSON is the output format for this API.

##Request Methods

You may call the Trade News & Articles API using the following request methods:

####Keyword

Returns articles for any keyword in the data set

    http://api.trade.gov/trade_articles/search.json?q=<keyword>

Example:

    http://api.trade.gov/trade_articles/search.json?q=logistics

    
##Return Values
<table border="0">
<tr>
<th>Field</th>
<th>Description</th>
</tr>

<tr>
<td>id</td>
<tdUunique record id</td>
</tr>

<tr>
<td>evergreen</td>
<td>Flag to designate "timeless" articles, always topically relevant/td>
</tr>

<tr>
<td>content	</td>
<td>Body of the article</td>
</tr>

<tr>
<td>publish_date</td>
<td>Earliest date article can be published</td>
</tr>

<tr>
<td>title</td>
<td>Title of the article</td>
</tr>

<tr>
<td>update_date</td>
<td>Date the article was last updated</td>
</tr>

<tr>
<td>content_type</td>
<td>Type of content embodied by the article</td>
</tr>

<tr>
<td>export_phase</td>
<td>Phase of exporting that a business should be in to benefit from the article</td>
</tr>

<tr>
<td>industry</td>
<td>Industry category assigned to this article</td>
</tr>

<tr>
<td>industry_sector</td>
<td>Sector assigned to this article</td>
</tr>

<tr>
<td>topic</td>
<td>Topic assigned to this article</td>
</tr>

<tr>
<td>subtopic</td>
<td>Subtopic assigned to this article</td>
</tr>

<tr>
<td>trade_region</td>
<td>Trade region covered by an article's content/td>
</tr>

<tr>
<td>geo_region</td>
<td>World region covered by an article's content</td>
</tr>

<tr>
<td>geo_subregion</td>
<td>Would sub-region covered by an article's content</td>
</tr>

<tr>
<td>country</td>
<td>Country covered by an article's content/td>
</tr>

<tr>
<td>keyword</td>
<td>Keywords assigned by the article's author</td>
</tr>

</table>
