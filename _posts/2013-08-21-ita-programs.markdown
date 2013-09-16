---
permalink: "ita-programs.html"
layout: template
title: ITA Programs Directory API
published: true
---

#ITA Programs Directory API

The ITA Programs for Exporters data provides information about programs sponsored by ITA that provide assistance and services to exporters, including:

* Matchmaking to foreign buyers
* Trade regulations
* International marketing and sales strategies
* Training and mentoring

The output format for this API is JSON.

##Request Methods
You may do a full text search of the ITA Programs Directory API using the following URL template:
###Full Text Search

    http://api.trade.gov/ita_programs/search.json?q={term}

Example:

    http://api.trade.gov/ita_programs/search.json?q=financing

You may query individual fields using the following URL templates:

###program_title

    http://api.trade.gov/ita_programs/search.json?program_title={term}

Example:

    http://api.trade.gov/ita_programs/search.json?program_title=MDCP

###abstract

    http://api.trade.gov/ita_programs/search.json?abstract={term}

Example:

    http://api.trade.gov/ita_programs/search.json?abstract=multi-year

###export_phase
export_phase can be none, one, or all of four values:  learn, ready, exporting, and expand

    http://api.trade.gov/ita_programs/search.json?export_phase={term}

Example:

    http://api.trade.gov/ita_programs/search.json?export_phase=expand


##Field Descriptions
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
<td>Email</td>
</tr>

<tr>
<td>contact_name</td>
<td>Contact name</td>
</tr>

<tr>
<td>office_name</td>
<td>Office name</td>
</tr>

<tr>
<td>phone</td>
<td>Phone</td>
</tr>

<tr>
<td>description</td>
<td>Full description of ITA program</td>
</tr>

<tr>
<td>website</td>
<td>Web site URL</td>
</tr>

</table>