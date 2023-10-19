#!/usr/bin/bash

#
#  name: mirta.sh / recon script for web penetration testing and bug bounty
#  author: b0ydC
#  year: 2023
#
#  usage: $ ./mirta.sh DOMAIN/IP_ADDR
#  sample: $ ./mirta.sh machetevault.com
#

domain_ip=$1

subfinder_folder = $domain_ip/subfinder
nmap_folder = $domain_ip/nmap

if [ ! -d "$domain" ]; then
        mkdir $domain
fi
if [ ! -d "$subfinder_folder" ]; then
        mkdir $subfinder_folder
fi
if [ ! -d "$nmap_folder" ]; then
        mkdir $nmap_folder
fi
if [ ! -d "$dirbuster_folder" ]; then
        mkdir $dirbuster_folder
fi

echo -e "[+] Launching subfinder tool..."
subfinder -d $domain > $subdomain_path/result.txt
echo -e "[--] Done."

echo -e "[+] Launching NMAP scan..."
nmap -sC -sV -T4 -p- $domain -oN $nmap_path/nmap_result.txt
echo -e "[--] Done."

echo -e "[+] Launching Dirb scan..."
dirb $domain >> $dirbuster_folder/dirb_result.txt
echo -e "[--] Done."

