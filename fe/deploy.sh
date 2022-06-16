#!/usr/bin/env bash

echo "[$(date)] client deploy" >> /home/ubuntu/fe-deploy.log

sudo systemctl restart nginx

sudo systemctl status nginx >> /home/ubuntu/fe-nginx.log
