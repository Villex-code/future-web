#!/bin/bash

# 1. Data API App Id
appid="data-xnlzv"

# 2. API Key
apikey="GiQSEWHdCY935YJAwZgYsdrUbTTuB60kXbC9ySzdH7iHAqRQ907UaMuweBe4luYH"

# 3. Base URL
baseurl="https://data.mongodb-api.com/app/data-xnlzv/endpoint/data/v1"

# 4. Endpoint
endpoint="/action/findOne"

# 5. dataSource
dataSource="Cluster0"

# 6. database
database="futurize-web"

# 7. collection
collection="flutters"

# 8. filter
#filter='{}'
filter='{
  "body": {
    "$regex": "dad-a-base", 
    "$options": "i"
  } 
}'

# 9. Run the curl request from the terminal: ./findOne.sh
curl -XPOST -H "api-key: $apikey" -H 'Access-Control-Request-Headers: *' -H 'Content-type: application/json' -d '{ 
  "dataSource": "'"$dataSource"'", 
  "database": "'"$database"'", 
  "collection": "'"$collection"'",
  "filter": '"$filter"'
}' $baseurl$endpoint | npx json