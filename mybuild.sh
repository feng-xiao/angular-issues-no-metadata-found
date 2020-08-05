#!/bin/bash
echo "===================AppFlow Variables Values======================="
echo $CI_APP_ID
echo $CI_APP_NAME
echo $CI_AUTOMATED_BUILD
echo $CI_AUTOMATION_ID
echo $CI_AUTOMATION_NAME
echo $CI_GIT_COMMIT_SHA
echo $CI_GIT_COMMIT_MSG
echo $CI_GIT_REF
echo $CI_GIT_REF_TYPE
echo "ENV : ${ENV}"
echo "====================================================================="
if [ "$CI_AUTOMATION_NAME" = "Production iOS" ]; then
    npx ionic build --prod
elif [ "$CI_AUTOMATION_NAME" = "Production Android" ]; then
    npx ionic build --prod
else
    npx ionic build
fi

