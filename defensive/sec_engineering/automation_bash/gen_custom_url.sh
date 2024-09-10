#!/bin/bash

#daily-24hrs
from=$(date -d 'yesterday' '+%Y-%m-%dT%H:%M')
to=$(date '+%Y-%m-%dT%H:%M')

# hourly-1hour
# from=$(date -d '1 hour ago' '+%Y-%m-%dT%H:%M')

# options: system_logs | api_audit | user_audit (any audit log part of API schema)

generate_url='https://URL/api/v1/accounts/63a/api_audit?from_date='$from'&to_date='$to''

# always check REST API documentation

echo $generate_url
