#!/bin/bash

# Go to root directory
cd ..
cd hephaistos-client-pw1
docker stop hephaistos-client-pw1_pgadmin_1
docker stop hephaistos-client-pw1_postgres_1
echo 'API stopped'

cd ..
cd hephaistos
make stop
echo 'Backend stopped'