---
permalink: /docs/2013-08-21-ita-programs.html
layout: template
title: ITA Programs Directory API
---

#ITA Programs Directory API

The ITA Programs for Exporters data provides information about programs sponsored by ITA that provide assistance and services to exporters, including:

* Matchmaking to foreign buyers
* Trade regulations
* International marketing and sales strategies
* Training and mentoring

The output format for this API is JSON.

##Request Methods

The Programs Directory API may be queried using the following URL template:

    http://api.trade.gov/events?q=<query string>

Example:

    http://api.trade.gov/events/q= … 

##Field Descriptions
<table border="1">
<tr>
<th>Field</th>
<th>Description</th>
<th>Searchable Field</th>
</tr>

<tr>
<td>id</td>
<td>Unique ID from the data source</td>
<td></td>
</tr>

<tr>
<td>program_title</td>
<td>Title of the Program</td>
<td>Yes</td>
</tr>

<tr>
<td>abstract</td>
<td>Executive summary</td>
<td>Yes</td>
</tr>

<tr>
<td>export_phase</td>
<td>How much experience in exporting should a business have to benefit from this program/td>
<td>Yes</td>
</tr>

<tr>
<td>field</td>
<td>xyz/td>
<td></td>
</tr>

<tr>
<td>field</td>
<td>xyz/td>
<td></td>
</tr>

</table>
