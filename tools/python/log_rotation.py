#!/bin/python3

#########################
#   author: b0ydC       #
#   year: 2023          #
# source: @machetevault #
#########################

import shutil
from datetime import datetime

naming = "_COMPLETED.csv"
path_rotation = "/home/user/archive" # please change the path to your convenience
data = "/home/user/file.csv" # please change the path to your convenience

def get_date(): # getting the date as string to add it to the name of the file
  current = datetime.now().date()
  str_date = str(current)
  return str_date

def log_rotation(): # calling get date string, create new naming convention and move the file
  date = get_date()
  file_compose = path_rotation + date + naming
  shutil.move(data,file_compose)

def main():
  LR = log_rotation
  LR()

main()
