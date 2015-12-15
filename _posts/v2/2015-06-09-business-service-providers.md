---
published: true
permalink: "/business-service-providers.html"
title: Business Service Providers
layout: body
---

#Business Service Providers API

{% include business-service-providers-tabs %}

##Resource URL

{% include business-service-providers-query.html %}

##Search Parameters for Business Service Providers

###keyword

Returns business service providers for a match in the **company_name**, **company_description**, or **contact_name** fields.

    {{ site.webservices_baseurl }}/business_service_providers/search?api_key={your key}&q={keyword}

**_Example_**

{% include business-service-providers-query-keyword.html %}

###ita_offices

Returns business service providers based on country. Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/business_service_providers/search?api_key={your key}&ita_offices={countries}

**_Example_**

{% include business-service-providers-query-keyword-ita-offices.html %}

###categories

Returns business service providers for a specific [category]({{ site.baseurl }}/business-service-providers-categories.html). Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/business_service_providers/search?api_key={your key}&categories={categories}

**_Example_**

{% include business-service-providers-query-keyword-categories.html %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

    {{ site.webservices_baseurl }}/business_service_providers/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include business-service-providers-query-size.html %}

##Metadata

###Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the issuing agency. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists at the same time daily.

###Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.

##Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| company_name | Name of company providing the service.
| category | Category of services that company provides.
| company_description | Description of company.
| contact_name | Name of contact at company.
| contact_title | Title of contact at company.
| company_email | Email for contact at company.
| company_address | Street, city, and country address for company.
| company_phone | Phone number for company.
| company_website | URL for company site.
| ita_office | Name of ITA office that has provided company information.
| ita_contact_email | Email for ITA contact.
