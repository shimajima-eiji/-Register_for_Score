"""
ZIPパスワードをよく忘れるマヌケな私のための備忘録
悪用絶対厳禁！
"""

# TODO formater

from time import time
import pyminizip

def openfile_pyminizip(path, password):
  try:
    pyminizip.uncompress(path,password,"./",0)
    print('password: ' + password)
  except:
    pass


import zipfile
def unzip_with_pwd(path, pwd=''):
  with zipfile.ZipFile(path, 'r') as zip_file:
    try:
      zip_file.extractall(path=path, pwd=pwd)
      print('password: ' + password)
    except:
      pass

import slackweb
def post_slack(timer):
  slack = slackweb.Slack(url="(Slack incomming WebhookURL)")
  slack.notify(text="@オーナー openzip.py完了: " + str(timer))

start = time()
// 解析
end = time() - start

print(end)
post_slack(end)
