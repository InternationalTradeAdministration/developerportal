---
permalink: /docs/office-centers.html
layout: template
title: Offices & Centers API
---

#Offices & Centers API

This API provides contact and address information for all of ITA’s domestic and international export assistance centers. Incorporating these listings into directories of business counseling services is one example of how developers can use this API to assist exporters.

The output format for this API is JSON.

##Request Methods

The Offices & Centers API may be queried using the following URL templates:

    http://api.trade.gov/ita_office_locations/search.json?&state={term}

Example:

    http://api.trade.gov/ita_office_locations/search.json?&state=NY


##Field Descriptions
<table border="0">
<tr>
<th>Field</th>
<th>Description</th>
<th>Searchable Field</th>
</tr>

<tr>
<td>post</td>
<td>Name of the post</td>
<td></td>
</tr>

<tr>
<td>office_name</td>
<td>Office name</td>
<td></td>
</tr>

<tr>
<td>id</td>
<td>Unique identifier for post</td>
<td></td>
</tr>

<tr>
<td>country</td>
<td>Country name</td>
<td>Yes</td>
</tr>

<tr>
<td>state</td>
<td>State abbreviation, for domestic offices</td>
<td>Yes</td>
</tr>

<tr>
<td>email</td>
<td>Office email address</td>
<td></td>
</tr>

<tr>
<td>fax</td>
<td>Fax number</td>
<td></td>
</tr>

<tr>
<td>mail_instructions</td>
<td>Snail mail instructions</td>
<td></td>
</tr>

<tr>
<td>phone</td>
<td>Office phone number</td>
<td></td>
</tr>

<tr>
<td>post_type</td>
<td>Type of post (domestic or international)</td>
<td></td>
</tr>


</table>
