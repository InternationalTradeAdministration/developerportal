---
permalink: "ita-office-locations.html"
layout: template
title: "Offices & Centers API"
published: true
---

#Offices & Centers API

The Offices & Centers API provides contact and address information for all of ITA’s domestic and international export assistance centers. Incorporating these listings into directories of business counseling services is one example of how developers can use this API to assist exporters.

The output format for this API is JSON.

##Request Methods
You may query the Offices & Centers API API using the following URL templates:
###Full Text Search

    http://api.trade.gov/ita_office_locations/search.json?q={term}

Example:

    http://api.trade.gov/ita_office_locations/search.json?q=Nashville

###Field Searches

####country

    http://api.trade.gov/ita_office_locations/search.json?country={term}

Example:

    http://api.trade.gov/ita_office_locations/search.json?country=Germany

####state

    http://api.trade.gov/ita_office_locations/search.json?state={term}

Example:

    http://api.trade.gov/ita_office_locations/search.json?state=TN



##Field Descriptions
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