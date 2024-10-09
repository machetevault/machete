#!/bin/bash

## same variant per log type

get_url=$(bash /opt/FOLDER/generate_url_api_audit.sh)
source /home/USER/env.sh

call_response=$(curl -s -H "Authorization: Token "$AS_KEY $get_url)
echo "$call_response"

next_page_uri=$(echo "$call_response" | jq -r '.next_page_uri')

echo "$next_page_uri"

while [ "$next_page_uri" != "null" ]; do
	new_call=$(curl -s -H "Authorization: Token "$AS_KEY $next_page_uri)
	echo "$new_call"

	next_page_uri=$(echo "$new_call" | jq -r '.next_page_uri')

	if [ "$next_page_uri" == "null" ]; then
		break
	fi

done
