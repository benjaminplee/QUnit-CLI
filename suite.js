load("../qunit/qunit/qunit.js");

QUnit.init();
QUnit.config.blocking = false;
QUnit.config.autorun = true;
QUnit.config.updateRate = 0;

QUnit.log = function(result, message, details) {
    print(result ? 'PASS' : 'FAIL', details.message);
};

load("myLib.js");
load("myLibTest.js");