# ZSCNSD-OfficialWebsite

The official website of ZSC Net Support Department

## Build Setup

Before starting, you need to add SSL config file to ./config folder. Please contact Clovin to get config files.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9594
npm run dev

# build for production with minification
npm run build

# start server in production environment
npm run start
```

## For Docker user
``` bash
# Build an image from a Dockerfile
docker build .
# run docker
docker run -d -p (port you wanted):9594 -v /root/sheet:/ZSCNSD-OfficialWebsite/models/workList/sheets (name you given to the docker)
# NOTICE:
  If you have updated worklist ,'-v /root/sheet:/ZSCNSD-OfficialWebsite/models/workList/sheets' is unnecessary.
  Otherwise you can deploy nginx/apache/candy... on your host enviroment and use Reverse Proxy to do better.
