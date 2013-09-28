---
published: true
permalink: "market-research-library.html"
layout: template
---

#Market Research Library
The Market Research Library API provides metadata for country and industry reports that are produced by ITA’s trade experts and are available in ITA’s online market research library.  Categorized by country and industry, these reports include:

* Market Research Reports
* Best Market Reports
* Country Commercial Guides

The output format for this API is JSON.

##Request Methods
You may query the Market Research Library API using the following URL templates:
####Keyword
Returns market research reports for any keyword in the data set

    http://api.trade.gov/market_research_library/search.json?q=<keyword>

#####Example:

    http://api.trade.gov/market_research_library/search.json?q=modernization

####country
Returns market research reports for a [specific country](country-list.html)

    http://api.trade.gov/market_research_library/search.json?country=<country name>

#####Example:
  
    http://api.trade.gov/market_research_library/search.json?country=Russia

####industry
Returns market research reports for a specific [industry](industry-list.html)

    http://api.trade.gov/market_research_library/search.json?industry=<industry name>

#####Example:
  
    http://api.trade.gov/market_research_library/
	search.json?industry=agribusiness

##Return Values
<table>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>id</td>
<td>Unique identifier assigned to the event</td>
</tr>
<tr>
<td>title</td>
<td>Report title</td>
</tr>
<tr>
<td>industry</td>
<td>Industry category assigned to the report</td>
</tr>
<tr>
<td>country</td>
<td>Country category assigned to the report</td>
</tr>
<tr>
<td>description</td>
<td>Abstract of the report’s content</td>
</tr>
<tr>
<td>url</td>
<td>URL for the report</td>
</tr>
</table>
