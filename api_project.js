define({  "name": "Dokumentasi cocorolife API",  "version": "1.0.0",  "description": "Dokumentasi API untuk cocorolife payment gateway",  "title": "Docs | 'cocorolife API'",  "url": "http://dev.openapi.cocorolife.id/api/v1/",  "template": {    "withCompare": true,    "withGenerator": true  },  "header": {    "title": "Introduction",    "content": "<h2><h2 id=\"api-example-for-a-submenu-entry\" style=\"margin-top: 10px\"></h2></h2>\n<h1>Introduction</h1>\n<p>Welcome to the OPEN API integration documentation. The below document will describe API to integrate OPENAPI products, with inquiry and payments with your system.</p>\n<p>Version : 1.0</p>\n<p>Last Updated : 18th February 2021</p>\n<h2 style=\"margin-top:20px\"> </h2>\n<h1>Setup and Connection</h1>\n<p>For Development: <code style=\"padding:3px\">https://dev.openapi.cocorolife.id/end_point</code></p>\n<br />\n<span style=\"padding:1em; background-color: #efefef;\"><code>end_point</code> is defined with each API below</span>\n<h2></h2>\n<br />\n<p>In order to successful integrate with OpenAPI system, the below things need to be shared:</p>\n<ul>\n<li>Partner server IP for whitelisting</li>\n<li>Callback URL</li>\n</ul>\n<h2></h2>\n<h2></h2>\n<h1>Token Generation</h1>\n<p>You will require <b>API KEY</b> and <b>API SECRET</b> in order to successfully generate bearer token. OpenAPI uses JWT token to authenticate and encrypt each API request.</p>\n<h3>Sample Token</h3>\n<h3></h3>\n<span style=\"padding:1em; background-color: #efefef;\"><code>TOKEN:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXJ0bmVySUQiOiJjaGVsc2VhIiwiQWNjb3VudE51bWJlciI6IjA4MTMzOTM3MjM4OSIsIlByb2R1Y3RDb2RlIjoiUFJFUEFJRCJ9.s8hfKYCJzTm17gydB5zaOd0Mc2MWT/qXyacdWCWBpBQ</code></span>\n<h3></h3>\n<h3></h3>\n<h3></h3>\n<h3></h3>\n<p>In above example, the token is broken down into three parts:</p>\n<h1>\n</h1>\n<table><thead style=\"background-color:#efefef\">\n<tr>\n<th>Part</th>\n<th>Description</th>\n<th>Example</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>header</td>\n<td>header payload in JSON format BASE64 encoded</td>\n<td><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</code></td>\n</tr>\n<tr>\n<td>body</td>\n<td>body payload in JSON format BASE64 encoded</td>\n<td><code>eyJQYXJ0bmVySUQiOiJBRzc3NDUiLCJBY2NvdW50TnVtYmVyIjoiMDgxMjExMTExMTExIiwiUHJvZHVjdENvZGUiOiJQVVRLMTAifQ</code></td>\n</tr>\n<tr>\n<td>bearer</td>\n<td>combination of header part and body part encryted using HS256 with <code>API Secret</code> as the key</td>\n<td><code>s8hfKYCJzTm17gydB5zaOd0Mc2MWT/qXyacdWCWBpBQ </code></td>\n</tr>\n</tbody></table>\n<h2></h2>\n<h2></h2>\n<p>The above then is contructed to create the API Token as below:</p>\n<h2></h2>\n<p><code>headerPart.bodyPart.bearerToken</code></p>\n<br />\n<h3>header part</h3>\n<p>The Header part of the TOKEN specifies the type of encryption and token generation method. This will be the same for all API request for that version.</p>\n<p>This becomes the first part of the token.</p>\n<h4></h4>\n<h4>header payload </h4>\n<pre><code class=\"language-json\">{&quot;alg&quot;:&quot;HS256&quot;,&quot;typ&quot;:&quot;JWT&quot;}\n</code></pre>\n<h4>Base64 encrypt the Header </h4>\n<pre><code class=\"language-bash\">echo -n '{&quot;alg&quot;:&quot;HS256&quot;,&quot;typ&quot;:&quot;JWT&quot;}' | base64 | sed s/\\+/-/ | sed -E s/=+$//\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\n</code></pre>\n<br />\n<h3>body part</h3>\nThe body part of the payload depends on the API end_point that is being called. Details on the different end_point and their payloads are defined in sections below\n<h4>Sample Body Payload</h4>\n<pre><code class=\"language-json\">{\n  &quot;partnerId&quot;: &quot;AG7745&quot;,\n  &quot;AccountNumber&quot;: &quot;081211111111&quot;,\n  &quot;ProductCode&quot;: &quot;PUTK10&quot;\n}\n</code></pre>\n<h4>Base64 encrypt the Body </h4>\n<pre><code class=\"language-bash\">echo -n '{&quot;partnerId&quot;:&quot;AG7745&quot;,&quot;AccountNumber&quot;:&quot;081211111111&quot;,&quot;ProductCode&quot;:&quot;PUTK10&quot;}' |  base64 | sed s/\\+/-/ | sed -E s/=+$//\neyJQYXJ0bmVySUQiOiJBRzc3NDUiLCJBY2NvdW50TnVtYmVyIjoiMDgxMjExMTExMTExIiwiUHJvZHVjdENvZGUiOiJQVVRLMTAifQ\n</code></pre>\n<br />\n<h3>bearer</h3>\nBearer is created by apply HS256 encrption to the header and body BASE64 strings with the api_secret key.\n<h4>Sample Bearer</h4>\n<pre><code class=\"language-bash\">echo -n 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXJ0bmVySUQiOiJBRzc3NDUiLCJBY2NvdW50TnVtYmVyIjoiMDgxMjExMTExMTExIiwiUHJvZHVjdENvZGUiOiJQVVRLMTAifQ' | openssl dgst -sha256 -hmac secret_key -binary | openssl base64 -e -A | sed s/\\+/-/ | sed -E s/=+$//\ns8hfKYCJzTm17gydB5zaOd0Mc2MWT/qXyacdWCWBpBQ\n</code></pre>\n<h1>API Request</h1>\n<p>Every request sent to OpenAPI will be in this format. All parameters are added to HEADER and BODY is left emply. All requests are POST requests.</p>\n<p>Below are details for API version 1.0.</p>\n<h1> \n</h1>\n<table><thead style=\"background-color:#efefef\">\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Sample Data</th>\n</tr>\n</thead><tbody>\n<tr>\n<td><code>KEY</code></td>\n<td>OpenAPI partner key provided.</td>\n<td><code>AG7745</code></td>\n</tr>\n<tr>\n<td><code>TOKEN</code></td>\n<td>Token generated using above method</td>\n<td><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXJ0bmVySUQiOiJjaGVsc2VhIiwieyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cQWNjb3VudE51bWJlciI6IjA4MTMzOTM3MjM4OSIsIlByb2R1Y3RDb2RlIjoiUFJFUEFJRCJ9.hHl6FFg8T9OaAHE6l0MFLtaZBwcTiTIj9S4cTiuCy8w </code></td>\n</tr>\n<tr>\n<td><code>VERSION</code></td>\n<td>Version of the API that is being called</td>\n<td><code>1.0</code></td>\n</tr>\n<tr>\n<td><code>Content-Type</code></td>\n<td>Content type of the request. Should be <code>application/json</code></td>\n<td><code>application/json</code></td>\n</tr>\n</tbody></table>\n<p>Each API request will have a payload to shown in example below.</p>\n<pre><code class=\"language-shell\">curl &quot;http://dev.openapi.cocorolife.id/example/api&quot;\n  -H &quot;KEY:API Key&quot;\n  -H &quot;TOKEN:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXJ0bmVySUQiOiJBRzc3NDUiLCJBY2NvdW50TnVtYmVyIjoiMDgxMjExMTExMTExIiwiUHJvZHVjdENvZGUiOiJQVVRLMTAifQ.hHl6FFg8T9OaAHE6l0MFLtaZBwcTiTIj9S4cTiuCy8w&quot;\n  -H &quot;VERSION:1.0&quot;\n  -H &quot;Content-Type:application/json&quot;\n</code></pre>\n<p>Make sure to replace <code>API Key</code> with your API key.</p>\n"  },  "footer": {    "title": "Best practices",    "content": ""  },  "sampleUrl": false,  "defaultVersion": "0.0.0",  "apidoc": "0.3.0",  "generator": {    "name": "apidoc",    "time": "2021-10-24T09:20:34.368Z",    "url": "http://apidocjs.com",    "version": "0.17.7"  }});
