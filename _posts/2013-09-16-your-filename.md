---
published: false
permalink: "/docs/market-research-abstracts.html"
layout: template
---

#Market Research Abstracts API
The Market Research Abstracts API provides metadata for country and industry reports produced by ITA’s trade experts, and available in ITA’s online market research library.  Categorized by country and 

industry, these reports include:

* Market Research Reports
* Best Market Reports
* Country Commercial Guides

The output format for this API is JSON.

##Request Methods

The Market Research Abstracts API may be queried using the following URL templates:

    http://api.trade.gov/market_research_library/search.json?&country={term}

Example:

    http://api.trade.gov/market_research_library/search.json?&country=IN

##Field Descriptions
<table border="0">
<tr>
<th>Field</th>
<th>Description</th>
<td>Searchable Field</td>
</tr>
<tr>
<td>id</td>
<td>Unique identifier assigned to the event</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>Report title</td>
<td></td>
</tr>
<tr>
<td>industry</td>
<td>Industry category assigned to the report</td>
<td>Yes</td>
</tr>
<tr>
<td>country</td>
<td>Country category assigned to the report</td>
<td>Yes</td>
</tr>
<tr>
<td>description</td>
<td>Abstract of the report’s content</td>
<td></td>
</tr>
<tr>
<td>url</td>
<td>URL for the report</td>
<td></td>
</tr>
</table>