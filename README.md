# chartjs-datastream
Example of client-server application using node to consume Akamai DataStream data and show it using charjs.

Usage:

1. Clone de repository (git clone https://github.com/angelnogueras/chartjs-datastream.git)

2. cd chartjs-datastream.git

3. npm install

4. Create ".env" file with content like

> SECTION=\<.edgerc section name\>

> STREAM_AGG_ID=\<datastream stream id\>

Take a look at Authorization (https://developer.akamai.com/introduction/Prov_Creds.html) and Credentials (https://developer.akamai.com/introduction/Conf_Client.html) sections in Akamai CLI Getting Started guide.

5. Start the server:
  npm start (run the server in production mode)
  -or-
  npm run watch (nodemon run)

6. Server runs on port 3000 (but you can change it in server.js), so open a browser and surf to http://localhost:3000/report_time.html

7. You have a button to update the graph and a check to enable automatic update.
  

