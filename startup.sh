#!/usr/bin/env bash

osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' -e 'tell application "Terminal" to do script "sleep 2 && npm start" in selected tab of the front window'

osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' -e 'tell application "Terminal" to do script "sleep 1 && cd client/ && webpack -w" in selected tab of the front window'