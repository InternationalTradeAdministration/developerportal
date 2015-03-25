---
published: true
permalink: "/market-research-library.html"
title: Market Research Library API
layout: body
---

#Market Research Library API


{% include mrl-tabs %}

##Resource URL

[http://api.trade.gov/market_research_library/search](http://api.trade.gov/market_research_library/search)

##Search Parameters for market research library sources

###keyword

Returns market research reports for a match in the **description** or **title** fields.

    http://api.trade.gov/market_research_library/search?q={keyword}

**_Example_**

[http://api.trade.gov/market_research_library/search?q=modernization](http://api.trade.gov/market_research_library/search?q=modernization)

###countries

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/market_research_library/search?countries={country code}

**_Example_**

[http://api.trade.gov/market_research_library/search?countries=MX](http://api.trade.gov/market_research_library/search?countries=MX)

###industry

Returns market research reports for a specific [industry]({{ site.baseurl }}/v1/industry-list-market-research-library.html)

    http://api.trade.gov/market_research_library/search?industry={industry name}

**_Example_**

[http://api.trade.gov/market_research_library/search?industry=agribusiness](http://api.trade.gov/market_research_library/search?industry=agribusiness)


###expiration_date

Returns entries based on their expiration date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/market_research_library/search?expiration_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

[http://api.trade.gov/market_research_library/search?expiration_date=2015-03-25 TO 2015-12-31](http://api.trade.gov/market_research_library/search?expiration_date=2015-03-25 TO 2015-12-31)


###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

[http://api.trade.gov/market_research_library/search?country=BR&size=1&offset=1](http://api.trade.gov/market_research_library/search?country=CA&size=1&offset=1)

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| id              | Unique identifier assigned to the event                         |
| countries       | Country category(ies) assigned to the report                    |
| description     | Abstract of the report’s content                                |
| expiration_date | Date when the report is no longer valid                         |
| industries        | Industry categories assigned to the report                        |
| report_type     | The report type can either be CCG, Best Market Report, or Market Research Report|
| title           | Report title  (default sort)                                    |
| url             | URL for the report                                              |


This endpoint and its documentation has been updated to Version 2. Please visit the [API v1 Documentation]({{ site.baseurl }}/v1/market-research-library.html) page for the Version 1 documentation.
