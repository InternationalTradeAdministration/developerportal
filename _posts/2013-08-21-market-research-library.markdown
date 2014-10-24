---
published: true
permalink: "market-research-library.html"
title: Market Research Library API
layout: body
---

#<a href="market-research-library.html">Market Research Library API</a>
**Currently the market research reports that this API points to are offline.  We are working with the owners of the host system to make those reports available as quickly as possible.**

This API provides metadata for country and industry reports that are produced by ITA’s trade experts and are available in ITA’s online market research library.  Categorized by country and industry, these reports include:

* Market Research Reports
* Best Market Reports
* Country Commercial Guides

##Resource URL

<div><a href="http://api.trade.gov/market_research_library/search"><pre>http://api.trade.gov/market_research_library/search</pre></a></div>

##Search Parameters

###keyword

Returns market research reports for a match in the description or title fields.

    http://api.trade.gov/market_research_library/search?q={keyword}

#####Example:

<div><a href="http://api.trade.gov/market_research_library/search?q=modernization"><pre>http://api.trade.gov/market_research_library/search?q=modernization</pre></a></div>

###countries

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/market_research_library/search?countries={country code}

#####Example:

<div><a href="http://api.trade.gov/market_research_library/search?countries=MX"><pre>http://api.trade.gov/market_research_library/search?countries=MX</pre></a></div>

###industry

Returns market research reports for a specific [industry](industry-list-market-research-library.html)

    http://api.trade.gov/market_research_library/search?industry={industry name}

#####Example:

<div><a href="http://api.trade.gov/market_research_library/search?industry=agribusiness"><pre>http://api.trade.gov/market_research_library/search?industry=agribusiness</pre></a></div>

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

<div><a href=" http://api.trade.gov/market_research_library/search?country=BR&size=1&offset=1"><pre> http://api.trade.gov/market_research_library/search?country=BR&size=1&offset=1</pre></a></div>

##Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| id              | Unique identifier assigned to the event                         |
| countries       | Country category(ies) assigned to the report                    |
| description     | Abstract of the report’s content                                |
| expiration_date | Date when the report is no longer valid                         |
| industry        | Industry category assigned to the report                        |
| report_type     | The report type can either be CCG, Best Market Report, or Market Research Report|
| title           | Report title  (default sort)                                    |
| url             | URL for the report                                              |
