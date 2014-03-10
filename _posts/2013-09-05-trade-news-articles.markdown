---
permalink: "trade-news-articles.html"
layout: template
title: "Trade News & Articles"
published: true
---

##Trade News & Articles

The Trade News & Articles API provides in-depth news and articles written by Trade Specialists working in the Federal government.  The news and articles are categorized by industry, country, and topic area.  Developers can use this API to provide exporters with the latest insights into their industry and into the countries with which they would like to do business.

##Resource URL

    http://api.trade.gov/trade_articles/search

##Request Methods

###keyword

Returns articles for a match in the content and body fields.

    http://api.trade.gov/trade_articles/search?q=<keyword>

#####Example:

    http://api.trade.gov/trade_articles/search?q=logistics

###evergreen

Flag to designate articles that are always relevant to particular topic.

    http://api.trade.gov/trade_articles/search?evergreen={true or false}

#####Example:

    http://api.trade.gov/trade_articles/search?evergreen=true

###pub_date

####pub_date_start

Returns articles created on or after a specific date.

    http://api.trade.gov/trade_articles/search?pub_date_start={YYYY-MM-DD}

#####Example

    http://api.trade.gov/trade_articles/search?pub_date_start=2013-01-04

####pub_date_end

Returns articles created on or before a specified date.

    http://api.trade.gov/trade_articles/search?pub_date_end={YYYY-MM-DD}

#####Example

    http://api.trade.gov/trade_articles/search?pub_date_end=2013-01-07

###update_date

Returns articles created on a specified date.

    http://api.trade.gov/trade_articles/search?update_date={YYYY-MM-DD}

#####Example

    http://api.trade.gov/trade_articles/search?update_date=2013-04-30

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

    http://api.trade.gov/trade_articles/search?q=logistics&size=1&offset=1
    
##Return Values

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | Unique identifier for post                                      |
| evergreen | Flag to designate "timeless" articles, always topically relevant |
| content	| Body of the article |
| publish_date | Earliest date article can be published (default sort) |
| title | Title of the article |
| update_date | Date the article was last updated |
| content_type | Type of content embodied by the article |
| export_phase | Phase of exporting that a business should be in to benefit from the article |
| industry | Industry category assigned to this article |
| topic | Topic assigned to this article |
| subtopic | Subtopic assigned to this article |
| trade_region | Trade region covered by an article's content |
| geo_region | World region covered by an article's content |
| geo_subregion | Would sub-region covered by an article's content |
| country | Country covered by an article's content |
| keyword | Keywords assigned by the article's author |