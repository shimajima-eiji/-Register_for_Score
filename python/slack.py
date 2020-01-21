import slackweb

def post(param):
  """
  @param
    url(str): [Require] incomming webhook URL
    text(str): message
  """

  # Minimal
  slack = slackweb.Slack(url=param.url)
  slack.notify(text=param.text)
