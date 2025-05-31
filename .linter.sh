#!/bin/bash
cd /home/kavia/workspace/code-generation/pastelvibe-23341-156c18b0/pastelvibe_web_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

