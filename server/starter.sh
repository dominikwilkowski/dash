#!/bin/sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
	export PATH=/usr/local/bin:$PATH
	forever start -l dash.log --append -o dashOut.log -e dashError.log /www/dash/server/server.js serve >> /home/deploy/.forever/dash-apiRestart.log 2>&1
fi
