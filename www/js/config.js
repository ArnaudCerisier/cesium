/******
* !! WARNING: This is a generated file !!
*
* PLEASE DO NOT MODIFY DIRECTLY
*
* => Changes should be done on file 'app/config.json'.
******/

angular.module("cesium.config", [])

.constant("csConfig", {
	"cacheTimeMs": 60000,
	"fallbackLanguage": "en",
	"rememberMe": false,
	"showUDHistory": false,
	"timeout": 10000,
	"timeWarningExpireMembership": 5184000,
	"timeWarningExpire": 7776000,
	"logoutIlde": 600,
	"useLocalStorage": true,
	"useRelative": false,
	"initPhase": false,
	"expertMode": true,
	"decimalCount": 2,
	"httpsMode": false,
	"helptip": {
		"enable": true,
		"installDocUrl": "https://github.com/duniter/duniter/blob/master/doc/install-a-node.md"
	},
	"license": {
		"fr-FR": "license/license_g1-fr-FR.txt",
		"en": "license/license_g1-en.txt"
	},
	"node": {
		"host": "g1.duniter.tednet.fr",
		"port": "8999",
    "useSsl": true
	},
	"plugins": {
		"es": {
			"enable": false,
			"askEnable": false,
			"host": "g1.data.duniter.fr",
			"port": "443",
			"notifications": {
				"txSent": true,
				"txReceived": true,
				"certSent": true,
				"certReceived": true
			}
		}
	},
	"version": "0.12.9",
	"build": "2017-06-09T09:32:01.817Z",
	"newIssueUrl": "https://github.com/duniter/cesium/issues/new?labels=bug"
})

;
