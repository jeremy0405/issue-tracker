#!/usr/bin/env bash

BUILD_JAR=$(ls /home/ubuntu/be/build/libs/*.jar)
JAR_NAME=$(basename $BUILD_JAR)

echo $JAR_NAME >> /home/ubuntu/be-deploy.log
echo "[$(date)] be deploy" >> /home/ubuntu/be-deploy.log

echo "> 현재 실행중인 애플리케이션 pid 확인" >> /home/ubuntu/be-deploy.log
CURRENT_PID=$(sudo lsof -t -i:8080)

if [ -z $CURRENT_PID ]
then
  echo "> 현재 구동중인 애플리케이션이 없으므로 종료하지 않습니다." >> /home/ubuntu/deploy.log
else
  echo "> kill -15 $CURRENT_PID" >> /home/ubuntu/deploy.log
  sudo kill -15 $CURRENT_PID
  sleep 10
fi

nohup java -jar /home/ubuntu/be/build/libs/$JAR_NAME >> /home/ubuntu/deploy.log 2>/home/ubuntu/deploy_err.log &