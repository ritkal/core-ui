//@flow
/* Data & Datatime utils*/
import moment_ from 'moment-timezone';
import '../node_modules/moment-timezone/moment-timezone-utils';
import 'moment/locale/ru';
import 'moment/locale/en-gb';
import 'moment/locale/de';

/* Text Mask */
import maskInput from 'vanilla-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

/* --- */
import underscoreLib from 'underscore';
import mixin from './utils/underscore';
/* Core.Model utils */
import backbone from 'backbone';
import * as Marionette_ from 'backbone.marionette';
import 'backbone.modelbinder';
import 'backbone-computedfields';
import 'backbone.radio';
import 'backbone-associations';
/* --- */
import 'jstorage';
import * as Handlebars_ from 'handlebars';
import $_ from 'jquery';
import autosize from 'autosize';

import codemirror_ from 'codemirror/lib/codemirror';
import 'innersvg-polyfill';
import jsencrypt from 'jsencrypt';
import * as jqui from 'jquery-ui';

window._ = underscoreLib;
window._.mixin(mixin);

$_.browser = {
    msie: /msie|trident/i.test(navigator.userAgent)
};

const api = {
    'jquery-ui': jqui,
    moment: moment_,
    Handlebars: Handlebars_,
    $: $_,
    _: window._,
    Backbone: backbone,
    Marionette: Marionette_,
    codemirror: codemirror_,
    JSEncrypt: jsencrypt.JSEncrypt,
    autosize,
    maskInput,
    createNumberMask
};

const moment = api.moment;
const Handlebars = api.Handlebars;
const $ = api.$;
const _ = window._;
const Backbone = backbone;
const Marionette = Marionette_;
const codemirror = api.codemirror;

export default api;
export { moment, Handlebars, $, _, Backbone, Marionette, codemirror, autosize, createNumberMask, maskInput };
