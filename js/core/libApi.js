﻿/**
 * Developer: Stepan Burguchev
 * Date: 7/21/2014
 * Copyright: 2009-2016 Comindware®
 *       All Rights Reserved
 * Published under the MIT license
 */

/* global define, require, Handlebars, Marionette, classes, Backbone, global */

define([
	'keypress',
    'moment',
    'handlebars',
    'bluebird',
    'underscore',
    'underscore.string',

    'backbone',
    'backbone.radio',
    'backbone.associations',
    'backbone.forms',

    'marionette',

    'jquery',
    'jquery.mousewheel',
    'jquery.inputmask',
    'jquery.caret',
    'jquery.jstorage',
    'jquery.autosize',

    'datetimePicker',

    'moment.en',
    'moment.ru',
    'moment.de'
], function (keypress, moment, Handlebars, Promise, _, underscoreString) {
    'use strict';
	
	$.browser = {
        msie: (/msie|trident/i).test(navigator.userAgent)
    };
	
    var root = typeof global !== 'undefined' ? global : window;
    root.Handlebars = Handlebars;
    root.Promise = Promise;
    root.moment = moment;
    _.string = _.str = underscoreString;

    Backbone.Associations.EVENTS_NC = true;

    return {
		keypress: keypress,
        moment: moment
	};
});