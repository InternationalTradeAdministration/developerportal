---
permalink: "sharepoint-trade-articles.html"
layout: body
title: Sharepoint Trade Articles API
published: true
---

#<a href="sharepoint-trade-articles.html">Sharepoint Trade Articles API</a>
Trade articles published via the International Trade Administration's Sharepoint system.   

The output format for this API is JSON.

##Resource URL

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search"><pre>http://api.trade.gov/sharepoint_trade_articles/search</pre></a></div>

##Search Parameters

###keyword

Searches for a match within the title, short_title, summary, content, and keyword fields.

    http://api.trade.gov/sharepoint_trade_articles/search?q={term}

#####Example:

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search?q=logistics"><pre>http://api.trade.gov/sharepoint_trade_articles/search?q=logistics</pre></a></div>

###export_phases

Returns articles based on the export phase.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/sharepoint_trade_articles/search?export_phases={terms}

#####Example:

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search?export_phases=Expand,Exporting"><pre>http://api.trade.gov/sharepoint_trade_articles/search?export_phases=Expand,Exporting</pre></a></div>

###industries

Returns articles based on industry name.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/sharepoint_trade_articles/search?industries={terms}

#####Example:

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search?industries=Education,Finance"><pre>http://api.trade.gov/sharepoint_trade_articles/search?industries=Education,Finance</pre></a></div>

###countries

Returns articles based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/sharepoint_trade_articles/search?countries={country codes}

#####Example:

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search?countries=MX,TR"><pre>http://api.trade.gov/sharepoint_trade_articles/search?countries=MX,TR</pre></a></div>

###topics

Returns articles based on topic.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/sharepoint_trade_articles/search?topics={terms}

#####Example:

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search?topics=Exporting,Trade Finance"><pre>http://api.trade.gov/sharepoint_trade_articles/search?topics=Exporting,Trade Finance</pre></a></div>

###sub_topics

Returns articles based on sub-topic.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/sharepoint_trade_articles/search?sub_topics={terms}

#####Example:

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search?sub_topics=Export Training,Shipping"><pre>http://api.trade.gov/sharepoint_trade_articles/search?sub_topics=Export Training,Shipping</pre></a></div>

###geo_regions

Returns articles based on geo region.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/sharepoint_trade_articles/search?geo_regions={terms}

#####Example:

<div><a href="http://api.trade.gov/sharepoint_trade_articles/search?geo_regions=Africa,Asia"><pre>http://api.trade.gov/sharepoint_trade_articles/search?geo_regions=Africa,Asia</pre></a></div>

###update_date

Returns FAQs based on the date they were last updated.  Dates are filtered by entering a starting date and/or ending date (update_date_start and update_date_end).

    http://api.trade.gov/faqs/search?update_date_start={term}&update_date_end={term}

#####Example:

<div><a href="http://api.trade.gov/faqs/search?update_date_start=2014-01-01&update_date_end=2014-11-01"><pre>http://api.trade.gov/faqs/search?update_date_start=2014-01-01&update_date_end=2014-11-1</pre></a></div>

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

<div><a href="http://api.trade.gov/faqs/search?countries=BR&size=1&offset=1"><pre>http://api.trade.gov/faqs/search?countries=BR&size=1&offset=1</pre></a></div>


##Return Values

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for the FAQ.             |
| question         	 | The question being addressed by the FAQ.|
| answer             | The answer portion of the FAQ.  |
| update_date        | The date the FAQ was last updated.  |
| industry           | Industry category assigned to the FAQ. |
| country            | Countries relevent to the FAQ.          |
| topic              | Topic category assigned to the FAQ.      |
