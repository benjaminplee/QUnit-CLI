load("../qunit/qunit/qunit.js");

(function() {

QUnit.init();
QUnit.config.blocking = true;
QUnit.config.autorun = true;
QUnit.config.updateRate = 0;

    var stop_watch = {
	start_time: null, stop_time: null,

	start: function() {
	    this.start_time = new Date();
	},

	stop: function() {
	    this.stop_time = new Date();
	},

	elapsed_seconds: function() {
	    return ( this.stop_time.getMilliseconds() - this.start_time.getMilliseconds() ) / 1000;
	}
    };

    var current_test_name = null;
    var current_test_assertions = [];
    var totals = { pass: 0, fail: 0};

    QUnit.testStart = function(name) {
	current_test_name = name;
	current_test_assertions = [];
    };

    QUnit.testDone = function(name, fail_count, total_count) {
	if(fail_count > 0) {
	    print("FAIL - " + name);

	    for(var i = 0; i < current_test_assertions.length; i++) {
		print("    " + current_test_assertions[i]);
	    }


	    totals.fail = totals.fail + 1;
	}
	else {
	    print("PASS - " + name);
	    totals.pass = totals.pass + 1;
	}
    };

    QUnit.log = function(result, message, details) {
	details.message = details.message || "";

	var type = (typeof details.expected !== "undefined") ? "EQ" : "OK";

	var outcome = result ? "PASS" : "FAIL";
	
	var response = "";
	if(!result && typeof details.expected !== "undefined") {
	    response = "Expected: " + details.expected + ", Actual: " + details.actual;
	}

	current_test_assertions.push([outcome, type, details.message, response].join("|"));
    };

    // executing twice per test?
    QUnit.done = function() {
	stop_watch.stop();

	print("----------------------------------------");
	print(" PASS: " + totals.pass + "  FAIL: " + totals.fail + "  TOTAL: " + (totals.pass + totals.fail));
	print(" Finished in " + stop_watch.elapsed_seconds() + " seconds.");
	print("----------------------------------------");
    };

    stop_watch.start(); // hacked b/c QUnit.begin only executes in a browser env on dom ready

})();

load("myLib.js");
load("myLibTest.js");

QUnit.start();
