#!/bin/bash

get_url=$(bash /opt/PATH/generate_url.sh)
source /home/USER/env.sh

call_response=$(curl -s -H "Authorization: Token "$API_KEY $get_url)
echo "$call_response"

next_page_uri=$(echo "$call_response" | jq -r '.next_page_uri')

echo "$next_page_uri"

while [ "$next_page_uri" != "null" ]; do
        new_call=$(curl -s -H "Authorization: Token "$API_KEY $next_page_uri)
        echo "$new_call"

        next_page_uri=$(echo "$new_call" | jq -r '.next_page_uri')

        if [ "$next_page_uri" == "null" ]; then
                break
        fi
done
