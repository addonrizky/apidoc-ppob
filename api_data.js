define({ "api": [  {    "type": "post",    "url": "bill/check",    "title": "inquiry PLN",    "name": "inquiry_tagihan_PLN",    "group": "PLN",    "description": "<p>Service to inquiry billing postpaid PLN</p>",    "parameter": {      "fields": {        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "kodePartner",            "description": "<p>kode partner</p>"          },          {            "group": "Body",            "type": "String",            "size": "6..20",            "optional": false,            "field": "noTujuan",            "description": "<p>nomor tagihan</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "idTrx",            "description": "<p>generated by client, as a reference number</p>"          }        ]      }    },    "examples": [      {        "title": "curl",        "content": "curl -X POST 'http://dev.openapi.cocorolife.id/api/v1/bill/check' -H 'apiKey: 632e93023886160a2a5494cd49aeb72994fc61f6834' -H 'Content-Type: application/json' -H 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXJ0bmVySUQiOiJjaGVsc2VhIiwieyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cQWNjb3VudE51bWJlciI6IjA4MTMzOTM3MjM4OSIsIlByb2R1Y3RDb2RlIjoiUFJFUEFJRCJ9.hHl6FFg8T9OaAHE6l0MFLtaZBwcTiTIj9S4cTiuCy8w' -H 'version: 1.0' -H 'User-Agent: Mozilla/5.0 (Windows NT 5.1; rv:43.0) Gecko/20100101 Firefox/43.0' -H 'timestamp: 1635067037' --data-raw '{\n        \"kodePartner\" : \"PLN\",\n        \"noTujuan\" : \"3276012298917\",\n        \"idTrx\" : \"ABX84187\"\n    }'",        "type": "curl"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    \"responseCode\": 300,\n    \"success\": true,\n    \"message\": {\n        \"ID\": \"Your transaction was successful\",\n        \"EN\": \"Your transaction was successful\"\n    },\n    \"data\": {\n        \"refNumber\": \"3464234888qw16\",\n        \"transactionId\": 9503,\n        \"accountNumber\": \"516070377764\",\n        \"amount\": 89703,\n        \"totalAdmin\": 2500,\n        \"processingFee\": 0,\n        \"productCode\": \"LSPPJL\",\n        \"productName\": \"PLN Postpaid\",\n        \"category\": \"Listrik\",\n        \"token\": \"0AYP210ZA900B1BB1092326E1394FE8C\",\n        \"customerDetails\": \n        [\n            {\n                \"key\": \"Nama Pelanggan\",\n                \"value\": \"Wiji \"\n            },\n            {\n                \"key\": \"Waktu & Tanggal Pembayaran\",\n                \"value\": \"14 Mar 2020 | 15:20\"\n            },\n            {\n                \"key\": \"Nomor Kontrak\",\n                \"value\": \"516070377764\"\n            }\n        ],\n        \"billDetails\": \n        [\n            {\n                \"billId\": \"0\",\n                \"billInfo\": [],\n                \"key\": \"RP TAG PLN\",\n                \"value\": \"87203\"\n            },\n            {\n                \"billId\": \"0\",\n                \"billInfo\": [],\n                \"key\": \"Biaya Administrasi\",\n                \"value\": \"2500\"\n            }\n        ],\n        \"productDetails\": [\n            {\n                \"key\": \"IDPEL\",\n                \"value\": \"516070377764\"\n            },\n            {\n                \"key\": \"Tarif/Daya\",\n                \"value\": \"R1/000000450VA\"\n            },\n            {\n                \"key\": \"BL/TH\",\n                \"value\": \"Jan20\"\n            },\n            {\n                \"key\": \"Stand Meter\",\n                \"value\": \"00012318-00012492\"\n            },\n            {\n                \"key\": \"Nomor Referensi\",\n                \"value\": \"0AYP210ZA900B1BB1092326E1394FE8C\"\n            }\n        ],\n        \"extraFields\": []\n    }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 OK \n {\n     \"responseCode\": \"301\",\n     \"success\": false,\n     \"message\": {\n         \"ID\": \"Your inquiry was fail\",\n         \"EN\": \"Your inquiry was fail\"\n     },\n     \"data\": {}\n }",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "docs-vikendiinternal/pln.js",    "groupTitle": "PLN",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content",            "description": "<p>type of the request. Should be application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "apiKey",            "description": "<p>OpenAPI partner key provided</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>generated using JWT method</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "version",            "description": "<p>Version of the API that is being called</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "userAgent",            "description": "<p>Version of the API that is being called</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "timestamp",            "description": "<p>exact time that show when the API get hit</p>"          }        ]      },      "examples": [        {          "title": "Header-Example:",          "content": "\t{\n\t\t\"Content-Type\" : \"application/json\",\n\t\t\"apiKey\" : \"632e93023886160a2a5494cd49aeb72994fc61f6834355d175a423b99715a9df\",\n\t\t\"token\" : \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXJ0bmVySUQiOiJjaGVsc2VhIiwieyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cQWNjb3VudE51bWJlciI6IjA4MTMzOTM3MjM4OSIsIlByb2R1Y3RDb2RlIjoiUFJFUEFJRCJ9.hHl6FFg8T9OaAHE6l0MFLtaZBwcTiTIj9S4cTiuCy8w\",\n\t\t\"version\" : \"1.0\",\n     \"User-Agent\" : \"Mozilla/5.0 (Windows NT 5.1; rv:43.0) Gecko/20100101 Firefox/43.0\",\n     \"timestamp\" : \"1234567890123\"\n\t}",          "type": "json"        }      ]    }  }] });
