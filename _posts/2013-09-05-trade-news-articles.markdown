---
permalink: "trade-news-articles.html"
layout: template
title: "Trade News & Articles"
published: true
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
| Field | Description |
| id | Unique record id |
| evergreen | Flag to designate "timeless" articles, always topically relevant |
| content	| Body of the article |
| publish_date | Earliest date article can be published |
| title | Title of the article |
| update_date | Date the article was last updated |
| content_type | Type of content embodied by the article |
| export_phase | Phase of exporting that a business should be in to benefit from the | article |
| industry | Industry category assigned to this article |
| industry_sector | Sector assigned to this article |
| topic | Topic assigned to this article |
| subtopic | Subtopic assigned to this article |
| trade_region | Trade region covered by an article's content |
| geo_region | World region covered by an article's content |
| geo_subregion | Would sub-region covered by an article's content |
| country | Country covered by an article's content |
| keyword | Keywords assigned by the article's author |