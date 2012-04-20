(function($) {

/**
 * Where extensions to AUI that aren't ready to migrate should be stored.
 *
 * Functions added here should have a @since version and go on the roadmap to
 * be moved over after a suitable delay.
 */

/**
 * AJS.Data will be the namespace for accessing dynamic data passed from the
 * server to JavaScript via the page HTML.
 *
 * @since 3.4
 */
AJS.Data = $.extend({}, AJS.Data, {

    /**
     * Returns a value given a key. If no entry exists with the key, undefined is returned.
     *
     * @method get
     * @param key
     * @return {String}
     */
    get: function (key) {
        var metaEl = $("meta[name=ajs-" + key + "]");
        return metaEl.length ? metaEl.attr("content") : undefined;
    },

    /**
     * Returns true if the value for the provided key is equal to "true", else returns false.
     * otherwise.
     *
     * @method getBoolean
     * @param key
     * @return {boolean}
     */
    getBoolean: function (key) {
        return this.get(key) === "true";
    }

});

    AJS.logError = function(prefix, ex) {
        // Handle IE and Mozilla style Error objects
        // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error
        // http://msdn.microsoft.com/en-us/library/dww52sbt%28v=vs.94%29.aspx
        var msg = "";
        if (ex.number) {
            // IE encodes the 'facility' and 'error code' in number
            msg += "Facility: " + (ex.number>>16 & 0x1FFF) + ", ";
            msg += "Error code: " + (ex.number & 0xFFFF) + ", "
        }
        if (ex.description) {
            msg += ex.description;
        } else if (ex.message) {
            msg += ex.message;
        } else {
            msg += ex;
        }

        if (ex.fileName || ex.lineNumber) {
            msg += ' (';
            if (ex.fileName) {
                msg += ex.fileName;
            }
            if (ex.fileName && ex.lineNumber) {
                msg += ':';
            }
            if (ex.lineNumber) {
                msg += ex.lineNumber;
            }
            msg += ')';
        }

        AJS.log(prefix + msg);
    };

    // Override of atlassian.js toInit to add improved exception logging
    AJS.toInit = function (func) {
        $(function () {
            try {
                func.apply(this, arguments);
            } catch(ex) {
                AJS.logError("Failed to run init function: ", ex);
            }
        });
        return this;
    };

if (AJS.Data.getBoolean('log-rendered')) {
    var oldLog = AJS.log,
        logDiv = $('<div id="ajs-log" class="hidden log"><h3>AJS Log</h3>\n</div>'),
        head = $('head'),
        body;
    head.append(logDiv);
    if (AJS.Data.getBoolean('log-visible')) {
        logDiv.removeClass('hidden');
    }

    // AUI Logging is disabled if there is no console
    // we want to always log to a hidden div as well
    AJS.log = function(obj) {
        var str = (typeof(obj) === "undefined") ? "" : obj;
        if (body) {
            // ensure the div is the last on the page every time
            body.append(logDiv);
        } else {
            // logging before init is evil
            head.append($('<script type="text/x-log"></script>').text(str));
        }
        logDiv.append($('<p></p>').text('\n' + str));
        oldLog(obj);
    };

    AJS.toInit(function() {
        body = $('body');
        body.append(logDiv);
    });
}

})(AJS.$);
