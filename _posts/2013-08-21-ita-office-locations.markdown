---
permalink: "ita-office-locations.html"
layout: template
title: "ITA Office Locations API"
published: true
---

#ITA Office Locations API

This API provides contact and address information for all of ITA’s domestic and international export assistance centers. Incorporating these listings into directories of business counseling services is one example of how developers can use this API to assist exporters.

JSON is the output format for this API.

##Request Methods
You may call the ITA Office Locations API using the following request methods:

####Keyword
Returns office locations for a keyword within any field in the data set

    http://api.trade.gov/ita_office_locations/search.json?q=<keyword>

Example:

    http://api.trade.gov/ita_office_locations/search.json?q=Nashville

####Country
Returns office locations in a specific [country](country-list.html)

    http://api.trade.gov/ita_office_locations/search.json?country=<country name>
	
Example:

    http://api.trade.gov/ita_office_locations/search.json?country=Germany

####State
Returns locations for export assistance centers located in a specific  [U.S. State or Dependent Area](state-list.html)

    http://api.trade.gov/ita_office_locations/search.json?state=<state postal code abbreviation>

#####Example:

    http://api.trade.gov/ita_office_locations/search.json?state=TN

##Return Values
<table border="0">
<tr>
<th>Field</th>
<th>Description</th>
</tr>

<tr>
<td>post</td>
<td>Name of the post</td>
</tr>

<tr>
<td>office_name</td>
<td>Office name</td>
</tr>

<tr>
<td>id</td>
<td>Unique identifier for post</td>
</tr>

<tr>
<td>country</td>
<td>Country name</td>
</tr>

<tr>
<td>state</td>
<td>State abbreviation, for domestic offices</td>
</tr>

<tr>
<td>email</td>
<td>Office email address</td>
</tr>

<tr>
<td>fax</td>
<td>Fax number</td>
</tr>

<tr>
<td>mail_instructions</td>
<td>Snail mail instructions</td>
</tr>

<tr>
<td>phone</td>
<td>Office phone number</td>
</tr>

<tr>
<td>post_type</td>
<td>Type of post (domestic or international)</td>
</tr>


</table>
