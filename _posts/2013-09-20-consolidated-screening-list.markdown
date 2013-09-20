---
published: true
permalink: "consolidated-screening-list.html"
layout: template
---

## ITA Consolidated Screening List

ITA publishes the Consolidated Screening List, in conjunction with the Departments of Commerce, State and the Treasury, to help exporters screen potential parties with whom they may do business. Developers can use this API to keep exporters aware of foreign companies that have restrictions placed upon them by the U.S. Government.

In the event that a company, entity, or person on the list appears to match a party potentially involved in an export transaction, businesses must conduct additional due diligence before proceeding. When doing business with someone on this list there may be:

- A strict export prohibition
- A requirement for seeking a license application
- An evaluation of the end-use or user to ensure it does not result in an activity prohibited by any U.S. export regulations
- Other restrictions.

### Information You Should Provide to Your Users

The consolidated screening list is a list of parties for which the United States Government maintains restrictions on certain exports, re-exports, or transfers of items. If a party to the user's transaction matches a party name on the consolidated list, the user must check the official publication of restricted parties in the [Federal Register](http://www.gpoaccess.gov/fr/) or the official lists of restricted parties maintained on the web sites of the Departments of Commerce, State and the Treasury to ensure full compliance with all of the terms and conditions of the restrictions placed on the parties on this list.

If users have any questions related to the content of the information in the consolidated list, please refer them to the appropriate agency responsible for the list as indicated in the **source** field. 

##Request Methods

You may query the Consolidated Screening List API using the following URL templates:

####Keyword

Searches for term or keyword within any field in the data set

    http://api.trade.gov/consolidated_screening_list/search.json?q={term}

#####Example:

    http://api.trade.gov/consolidated_screening_list/search.json?q=Somali

####source
Searches for one of six unique abbreviations in the **source** field:

1. _DPL_	Denied Persons List
2. _DTC_	AECA Debarred List 
3. _EL_	Entity List
4. _ISN_	Nonproliferation Sanctions
5. _SDN_	Specially Designated Nationals List
6. _UVL_	Unverified List

#####Template

    http://api.trade.gov/consolidated_screening_list/search.json?source={term}
        
#####Example

    http://api.trade.gov/consolidated_screening_list/search.json?source=DPL
    
####sdn_type
Searches for one of three unique types in the **source** field:

1. _aircraft_
2. _individual_
3. _vessel_


#####Template

    http://api.trade.gov/consolidated_screening_list/search.json?sdn_type={term}
        
#####Example

    http://api.trade.gov/consolidated_screening_list/search.json?sdn_type=DPL



##Return Values
<table border="0">
<tr>
<th>Field</th>
<th>Description</th>
</tr>

<tr>
<td>field</td>
<td>xyz</td>
</tr>

<tr>
<td>field</td>
<td>xyz</td>
</tr>

<tr>
<td>field</td>
<td>xyz</td>
</tr>

<tr>
<td>field</td>
<td>xyz</td>
</tr>

<tr>
<td>field</td>
<td>xyz</td>
</tr>

<tr>
<td>field</td>
<td>xyz</td>
</tr>

</table>