# RangeMe iframe demo for ECRM book meeting

## Setup

* Add the following to local host file
```
  127.0.0.1 rangeme-test.com
  127.0.0.1 www.rangeme-test.com
  127.0.0.1 rangeme-test2.com
  127.0.0.1 rangeme-test3.com
  127.0.0.1 marketgate.com
```
* yarn
* yarn start
* Visit http://rangeme-test.com:1234/ in the browser, the iframe should work correctly
* Visit http://www.rangeme-test.com:1234/ in the browser, the iframe should work correctly
* Visit http://rangeme-test2.com:1234/ in the browser, the iframe should work correctly
* Visit http://rangeme-test3.com:1234/ in the browser, the iframe should NOT load
