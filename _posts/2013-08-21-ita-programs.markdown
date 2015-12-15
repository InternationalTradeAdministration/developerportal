---
permalink: "ita-programs.html"
layout: body
title: ITA Programs Directory API
published: true
---

#ITA Programs Directory API

This API provides information about ITA programs that provide assistance and services to exporters, including:

* Matchmaking to foreign buyers
* Trade regulations
* International marketing and sales strategies
* Training and mentoring

JSON is the output format for this API.

##Request Methods
You may call the ITA Programs Directory API using the following request method:

####Keyword
Returns a listing of ITA programs that match any keyword in the data set

    http://api.trade.gov/ita_programs/search.json?q=<keyword>

Example:

    http://api.trade.gov/ita_programs/search.json?q=financing

##Return Values
<table border="0">
<tr>
<th>Field</th>
<th>Description</th>
</tr>

<tr>
<td>id</td>
<td>Unique ID from the data source</td>
</tr>

<tr>
<td>program_title</td>
<td>Title of the Program</td>
</tr>

<tr>
<td>abstract</td>
<td>Executive summary</td>
</tr>

<tr>
<td>export_phase</td>
<td>How much experience in exporting should a business have to benefit from this program</td>
</tr>

<tr>
<td>email</td>
<td>Program contact's email address</td>
</tr>

<tr>
<td>contact_name</td>
<td>Program contact's name</td>
</tr>

<tr>
<td>office_name</td>
<td>Name of the office sponsoring the program</td>
</tr>

<tr>
<td>phone</td>
<td>Contact's phone number</td>
</tr>

<tr>
<td>description</td>
<td>Full description of the program</td>
</tr>

<tr>
<td>website</td>
<td>URL for the program's website</td>
</tr>

</table>