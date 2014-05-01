---
published: true
permalink: "market-research-library.html"
title: Market Research Library API
layout: template
---

#Market Research Library API
This API provides metadata for country and industry reports that are produced by ITA’s trade experts and are available in ITA’s online market research library.  Categorized by country and industry, these reports include:

* Market Research Reports
* Best Market Reports
* Country Commercial Guides

##Resource URL

    http://api.trade.gov/market_research_library/search

##Search Parameters

###keyword

Returns market research reports for a match in the description or title fields.

    http://api.trade.gov/market_research_library/search?q=<keyword>

#####Example:

    http://api.trade.gov/market_research_library/search?q=modernization

###countries

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/market_research_library/search?countries=<country name>

#####Example:

    http://api.trade.gov/market_research_library/search.json?countries=MX

###industry

Returns market research reports for a specific [industry](/industry-list-market-research-library.html)

    http://api.trade.gov/market_research_library/search.json?industry=<industry name>

#####Example:

    http://api.trade.gov/market_research_library/search.json?industry=agribusiness

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

    http://api.trade.gov/market_research_library/search?country=BR&size=1&offset=1

##Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| id              | Unique identifier assigned to the event                         |
| countries       | Country category(ies) assigned to the report                    |
| description     | Abstract of the report’s content                                |
| expiration_date | Expiration date                                                 |
| industry        | Industry category assigned to the report                        |
| report_type     | Report type                                                     |
| title           | Report title  (default sort)                                    |
| url             | URL for the report                                              |
