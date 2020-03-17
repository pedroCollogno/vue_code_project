#!/bin/bash

git clone https://github.com/WhitePepperSAS/hephaistos
echo 'Backend cloned'
cd hephaistos
make build
echo 'Backend built'

cd ..
git clone https://github.com/musinux/hephaistos-client-pw1
echo 'API (client) for backend cloned'
cd hephaistos-client-pw1
npm install
echo 'Dependencies for API installed'