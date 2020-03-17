#!/bin/bash

# Go to root directory
cd ..
cd hephaistos
nohup make start &

echo 'Backend started'

cd ..
cd hephaistos-client-pw1
nohup docker-compose up &
echo 'DB and PGAdmin are up'
sleep 3s
npm run init
echo 'Client initiated: please save given pwd and email for API authentication'
npm run dev
echo 'API is up!'