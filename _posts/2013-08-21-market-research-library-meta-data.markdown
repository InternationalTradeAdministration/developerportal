---
permalink: /docs/market-research-library.html
layout: template
title: Market Research Abstracts API

---

#Market Research Abstracts API
The Market Research Abstracts API provides metadata for country and industry reports produced by ITA’s trade experts, and available in ITA’s online market research library.  Categorized by country and industry, these reports include:

* Market Research Reports
* Best Market Reports
* Country Commercial Guides

The output format for this API is JSON.

##Request Methods

The Market Research Abstracts API may be queried using the following URL template:

    http://api.trade.gov/events?q=<query string>

Example:

    http://api.trade.gov/events/q= … 

##Field:  Descriptions
<table border="1">
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
<td>website</td>
<td>URL for the report</td>
</tr>
</table> 
