#!/bin/bash

datapath="/var/log/PATHNAME"
archive="/var/log/PATHNAME/"

#compress
tar -czvf FILENAME_logs$(date +%Y-%m-%d).tar.gz $datapath
#move archive
mv /home/USER/*.tar.gz $archive
