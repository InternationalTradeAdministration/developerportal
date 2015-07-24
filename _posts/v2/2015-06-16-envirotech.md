---
published: true
permalink: "/envirotech.html"
title: Environmental Solutions Toolkit
layout: body
---

#Environmental Solutions Toolkit

{% include envirotech-tabs %}

The Environmental Solutions Toolkit contains six types of content, which are available via six endpoints.



##Envirotech Issues

###Search Parameters

The Issues endpoint can be searched via the following parameters:

####keyword

Returns entities for a match in the **name_chinese**, **abstract_chinese**, **name_english**, **abstract_english**, **name_french**, **abstract_french**, **name_portuguese**, **abstract_portuguese**, **name_spanish** or **abstract_spanish** fields.

    {{ site.webservices_baseurl }}/v2/envirotech/issues/search?api_key={your key}&q={keyword}

**_Example_**

{% include envirotech-query.html endpoint="issues" q="odorless" %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

This endpoint will search Envirotech Issues with the defined languages: English, Chinese, French, Portuguese, and Spanish.

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| name_chinese
| name_english
| name_french
| name_portuguese
| name_spanish
| abstract_chinese
| abstract_english
| abstract_french
| abstract_portuguese
| abstract_spanish
| source_created_at
| source_updated_at
| source_id



##Envirotech Regulations

###Search Parameters

The Regulations endpoint can be searched via the following parameters:

####keyword

Returns entities for a match in the **name_chinese**, **name_english**, **name_french**, **name_portuguese**, or **name_spanish** fields.

    {{ site.webservices_baseurl }}/v2/envirotech/regulations/search?api_key={your key}&q={keyword}

**_Example_**

{% include envirotech-query.html endpoint="regulations" q="Sludge" %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

This endpoint will search Envirotech Regulations with the defined languages: English, Chinese, French, Portuguese, and Spanish.

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| name_chinese
| name_english
| name_french
| name_portuguese
| name_spanish
| source_created_at
| source_updated_at
| source_id



##Envirotech Solutions

###Search Parameters

The Solutions endpoint can be searched via the following parameters:

####keyword

Returns entities for a match in the **name_chinese**, **name_english**, **name_french**, **name_portuguese**, or **name_spanish** fields.

    {{ site.webservices_baseurl }}/v2/envirotech/solutions/search?api_key={your key}&q={keyword}

**_Example_**

{% include envirotech-query.html endpoint="solutions" q="biologique" %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

This endpoint will search Envirotech Solutions with the defined languages: English, Chinese, French, Portuguese, and Spanish.

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| name_chinese
| name_english
| name_french
| name_portuguese
| name_spanish
| source_created_at
| source_updated_at
| source_id



##Envirotech Providers

###Search Parameters

The Providers endpoint can be searched via the following parameters:

####keyword

Returns entities for a match in the **name_english** field.

    {{ site.webservices_baseurl }}/v2/envirotech/providers/search?api_key={your key}&q={keyword}

**_Example_**

{% include envirotech-query.html endpoint="providers" q="Catalyst" %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

This endpoint will search Envirotech Providers with the defined languages: English.

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| name_english
| source_created_at
| source_updated_at
| source_id


##Envirotech Regulatory Analysis Links

###Search Parameters

The Regulatory Analysis Links endpoint can be searched via the following parameters:

####keyword

Returns entities for a match in the **name_chinese**, **name_english**, **name_french**, **name_portuguese**, or **name_spanish** fields.

    {{ site.webservices_baseurl }}/v2/envirotech/analysis_links/search?api_key={your key}&q={keyword}

**_Example_**

{% include envirotech-query.html endpoint="analysis_links" q="Memorandum" %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

This endpoint will search Envirotech Regulatory Analysis Links with the defined languages: English, Chinese, French, Portuguese, and Spanish.

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| name_chinese
| name_english
| name_french
| name_portuguese
| name_spanish
| source_created_at
| source_updated_at
| url
| issue_id
| source_id


##Envirotech Regulatory Background Links

###Search Parameters

The Regulatory Background Links endpoint can be searched via the following parameters:

####keyword

Returns entities for a match in the **name_chinese**, **name_english**, **name_french**, **name_portuguese**, or **name_spanish** fields.

    {{ site.webservices_baseurl }}/v2/envirotech/background_links/search?api_key={your key}&q={keyword}

**_Example_**

{% include envirotech-query.html endpoint="background_links" q="Environmental" %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

This endpoint will search Envirotech Background Analysis Links with the defined languages: English, Chinese, French, Portuguese, and Spanish.

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| name_chinese
| name_english
| name_french
| name_portuguese
| name_spanish
| source_created_at
| source_updated_at
| url
| issue_id
| source_id
