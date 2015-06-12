---
published: true
permalink: "/business-service-providers.html"
title: Business Service Providers
layout: body
---

#Business Service Providers

{% include business-service-providers-tabs %}

##Resource URL

{% include business-service-providers-query.html %}

##Search Parameters for Business Service Providers

###keyword

Returns market research reports for a match in the **company_name**, **company_description**, or **contact_name** fields.

    {{ site.webservices_baseurl }}/v2/emenu_bsps/search?api_key={your key}&q={keyword}

**_Example_**

{% include business-service-providers-query-keyword.html %}

###ita_offices

Returns office locations based on country.  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/emenu_bsps/search?api_key={your key}&ita_offices={countries}

**_Example_**

{% include business-service-providers-query-keyword-ita-offices.html %}

###categories

Returns market research reports for a specific [category]({{ site.baseurl }}/business-service-providers-categories.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/emenu_bsps/search?api_key={your key}&categories={categories}

**_Example_**

{% include business-service-providers-query-keyword-categories.html %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

{% include business-service-providers-query-size.html %}

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| company_name
| ita_contact_email
| contact_name
| category
| company_description
| company_email
| company_phone
| contact_title
| company_website
| ita_office
| company_address
