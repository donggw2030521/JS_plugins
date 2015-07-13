"use strict";

var assert = require("assert");
var testUtils = require("./helpers/util.js");

var obj = {};
var error = new Error();
var thrower = function() {
    throw error;
};

var identity = function(val) {
    return val;
};

var array = function() {
    return [].slice.call(arguments);
};

var receiver = function() {
    return this;
};

var tryy = Promise["try"];

describe("Promise.attempt", function(){
    specify("should reject when the function throws", function() {
        var async = false;
        var ret = tryy(thrower).then(assert.fail, function(e) {
            assert(async);
            assert(e === error);
        });
        async = true;
        return ret;
    });
    specify("should reject when the function is not a function", function() {
        var async = false;
        var ret = tryy(null).then(assert.fail, function(e) {
            assert(async);
            assert(e instanceof Promise.TypeError);
        });
        async = true;
        return ret;
    });
    specify("should call the function with the given receiver", function(){
        var async = false;
        var ret = tryy(receiver, void 0, obj).then(function(val) {
            assert(async);
            assert(val === obj);
        }, assert.fail);
        async = true;
        return ret;
    });
    specify("should call the function with the given value", function(){
        var async = false;
        var ret = tryy(identity, obj).then(function(val) {
            assert(async);
            assert(val === obj);
        }, assert.fail);
        async = true;
        return ret;
    });
    specify("should apply the function if given value is array", function(){
        var async = false;
        var ret = tryy(array, [1,2,3]).then(function(val) {
            assert(async);
            assert.deepEqual(val, [1,2,3]);
        }, assert.fail);
        async = true;
        return ret;
    });

    specify("should unwrap returned promise", function(){
        var d = Promise.defer();

        var ret = tryy(function(){
            return d.promise;
        }).then(function(v){
            assert(v === 3);
        })

        setTimeout(function(){
            d.fulfill(3);
        }, 1);
        return ret;
    });
    specify("should unwrap returned thenable", function(){
        return tryy(function(){
            return {
                then: function(f, v) {
                    f(3);
                }
            }
        }).then(function(v){
            assert(v === 3);
        });

    });
});
