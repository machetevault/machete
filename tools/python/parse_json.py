#!/usr/bin/python3


#
# it is reading from a json output stored in a file.
#

import json

def parse_json(results):
  for key,value in results.items():
    if key == 'value1':
      print(f"string: {value}")
    elif key == 'value2':
      print(f"string: {value}")
    
    elif isinstance(value,dict):
      parse_json(value)
    elif isinstance(value,list):
      for item in value:
        if isinstance(item,dict):
          parse_json(item)

with open('filename.json', 'r') as file:
  results = json.load(file)

parse_json(results)
      
