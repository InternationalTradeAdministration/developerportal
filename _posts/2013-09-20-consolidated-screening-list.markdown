---
published: true
permalink: "consolidated-screening-list.html"
layout: template
---

## ITA Consolidated Screening List

ITA publishes the Consolidated Screening List, in conjunction with the Departments of Commerce, State and the Treasury, to help exporters screen potential parties with whom they might do business. Developers can use this API to keep exporters aware of foreign companies that have restrictions placed upon them by the U.S. Government.

In the event that a company, entity, or person on the list appears to match a party potentially involved in an export transaction, businesses must conduct additional due diligence before proceeding. When doing business with someone on this list there may be:

- A strict export prohibition
- A requirement for seeking a license application
- An evaluation of the end-use or user to ensure it does not result in an activity prohibited by any U.S. export regulations
- Other restrictions.

### Information Developers Should Provide to Their Users

The consolidated screening list is a list of parties for which the United States Government maintains restrictions on certain exports, re-exports, or transfers of items. If a party to the user's transaction matches a party name on the consolidated list, the user must check the official publication of restricted parties in the [Federal Register](http://www.gpoaccess.gov/fr/). They must also check the official lists of restricted parties maintained on the web sites, populated in the **source_list_ur field**, of the Departments of Commerce, State and the Treasury to ensure full compliance with all of the terms and conditions of the restrictions placed on the parties on this list.

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

1. _DPL_ - Denied Persons List (Department of Commerce)
2. _DTC_ - AECA Debarred List  (Department of State)
3. _EL_	- Entity List (Department of Commerce)
4. _ISN_ - Nonproliferation Sanctions (Department of State)
5. _SDN_ - Specially Designated Nationals List (Department of Treasury)
6. _UVL_ - Unverified List )Department of Commerce)

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
<td>source</td>
<td>Abbreviation of the list to which the entity belongs</td>
</tr>

<tr>
<td>entity_number</td>
<td>Unique id assigned by the originating list</td>
</tr>

<tr>
<td>sdn_type</td>
<td>Entity type from the SDN list</td>
</tr>

<tr>
<td>programs</td>
<td>Agency program related to the entity on the list</td>
</tr>

<tr>
<td>name</td>
<td>Entity's name</td>
</tr>

<tr>
<td>title</td>
<td>Entity's title</td>
</tr>

<tr>
<td>address</td>
<td>Entity's address</td>
</tr>

<tr>
<td>city</td>
<td>Entity's city</td>
</tr>

<tr>
<td>state</td>
<td>Entity's state</td>
</tr>

<tr>
<td>country</td>
<td>Entity's country</td>
</tr>

<tr>
<td>federal_register_notice</td>
<td>The official source of information about the parties on this list</td>
</tr>

<tr>
<td>start_date</td>
<td>The effective date of the entity on the list as defined by the Federal Register Notice</td>
</tr>

<tr>
<td>end_date</td>
<td>The date the entity was lifted, waived or expired on or from the lists</td>
</tr>

<tr>
<td>standard_order</td>
<td>Whether or not (Y/N) the standard order applies to the Denied Party as defined by the Bureau of Industry and Security (BIS)</td>
</tr>

<tr>
<td>license_requirement</td>
<td>The license requirement as determined by the Export Administration Regulations for the names on the Entity List (EL)</td>
</tr>

<tr>
<td>license_policy</td>
<td>The policy set forth in the Export Administration Regulations regarding denial of the name on the Entity 
List (EL)</td>
</tr>

<tr>
<td>call_sign</td>
<td>Call sign of the vessel listed on the Specially Designated Nationals list</td>
</tr>

<tr>
<td>vessel_type</td>
<td>Describes the type of vessel (ferry, bulk cargo, tug) listed on the Specially Designated Nationals List </td>
</tr>

<tr>
<td>gross_tonnage</td>
<td>The gross weight in tons not-registered for the vessel on the Specially Designated Nationals list</td>
</tr>

<tr>
<td>gross_register_tonnage</td>
<td>The gross weight in tons registered for the vessel on the Specially Designated Nationals list </td>
</tr>

<tr>
<td>vessel_flag</td>
<td>Country flag of the vessel on the Specially Designated Nationals List</td>
</tr>

<tr>
<td>vessel_owner</td>
<td>Owner/Operator of the vessel on the Specially Designated Nationals List </td>
</tr>

<tr>
<td>remarks</td>
<td>Additional remarks or notes regarding the company, entity or person on the list</td>
</tr>

<tr>
<td>address_number</td>
<td>A number used to uniquely identify multiple locations of the Specially Designated Nationals (SDNs)</td>
</tr>

<tr>
<td>address_remarks</td>
<td>Additional remarks or notes regarding the SDN address</td>
</tr>

<tr>
<td>alt_number</td>
<td>A number used to uniquely identify multiple aliases of the Specially Designated Nationals (SDNs)</td>
</tr>

<tr>
<td>alt_type</td>
<td>Abbreviation used to identify the alias type (aka, fka, nka, etc.) </td>
</tr>

<tr>
<td>alt_name</td>
<td>Alias name used by the entity on the Specially Designed Nationals List or Entity List</td>
</tr>

<tr>
<td>alt_remarks</td>
<td>Additional remarks or notes regarding the SDN or Entity List alternate name</td>
</tr>

<tr>
<td>source_list_url</td>
<td>Website of the specific agency list</td>
</tr>

</table>