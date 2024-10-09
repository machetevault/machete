#!/bin/bash

#daily
from=$(date -d 'yesterday' '+%Y-%m-%dT%H:%M')
to=$(date '+%Y-%m-%dT%H:%M')

# hourly
# from=$(date -d '1 hour ago' '+%Y-%m-%dT%H:%M')
# options: system_logs | api_audit | user_audit

generate_url='https://eu.api.adaptive-shield.com/api/v1/accounts/ACCOUNT_NUMBER/system_logs?from_date='$from'&to_date='$to''
echo $generate_url

