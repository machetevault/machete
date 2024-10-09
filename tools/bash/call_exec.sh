#!/bin/bash

#user_audit
call_USER=$(/home/USER/call_user_audit.sh)
output_USER="/var/FOLDER/24hrs_user_audit_logs_$(date +'%Y%m%d').json"
echo "$call_USER" > "$output_USER"

#api_audit
call_API=$(/home/USER/call_api_audit.sh)
output_API="/var/FOLDER/24hrs_api_audit_logs_$(date +'%Y%m%d').json"
echo "$call_API" > "$output_API"

#system_logs
call_SYSTEMLOGS=$(/home/USER/call_system_logs.sh)
output_SYSTEMLOGS="/var/FOLDER/24hrs_system_audit_logs_$(date +'%Y%m%d').json"
echo "$call_SYSTEMLOGS" > "$output_SYSTEMLOGS"

