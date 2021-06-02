#!/bin/sh

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
forever start -l dash.log --workingDir /www/dash/ --append -o dashOut.log -e dashError.log /www/dash/dashServer.js serve >> /home/deploy/.forever/dash-apiRestart.log 2>&1
