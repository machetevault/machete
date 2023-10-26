#!/usr/bin/bash

#
#  pyats.sh: used to exfiltrate data = attack server
#  
#  author: b0ydC / 2023
#

echo "enabling attack server..."
sleep 1

python3 -m http.server $PORT

  
