---
permalink: "trade-news-articles.html"
layout: template
title: "Trade News & Articles"
published: true
---

##Trade News & Articles

The Trade News & Articles API provides in-depth news and articles written by ITA's trade specialists.  The news and articles are categorized by industry, country, and topic area.  Developers can use this API to provide exporters with the latest insights into their industry and into the countries with which they would like to do business.

The output format for this API is JSON.

##Request Methods

You may query the Trade News & Articles API using the following URL templates:

###Keyword

Searches for term or keyword within any field in the data set

    http://api.trade.gov/trade_articles/search.json?q={term}

#####Example:

    http://api.trade.gov/trade_articles/search.json?q=solar

####evergreen

Searches whether the **evergreen** field is _true_ or _false_

    http://api.trade.gov/trade_articles/search.json?event_name={term}
    
#####Example

    http://api.trade.gov/trade_articles/search.json?event_name=true