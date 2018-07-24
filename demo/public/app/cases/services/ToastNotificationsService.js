import CanvasView from 'demoPage/views/CanvasView';

const showInfo = function () {
    const description = 'Confirm Message';

    core.ToastNotifications.add(description, 'Info');
};

const showSuccess = function () {
    const description = 'Message question';

    core.ToastNotifications.add(description, 'Success');
};

const showError = function () {
    const description = 'Error message';

    core.ToastNotifications.add(description, 'Error');
};

const View = Marionette.View.extend({
    template: Handlebars.compile(`
        '<input class="js-confirm__button message-service__button" type="button" value="Show Info notification">'
        '<input class="js-yes-no__button message-service__button" type="button" value="Show Success notification">'
        '<input class="js-error__button message-service__button" type="button" value="Show Error notification">'
        `),
    ui: {
        showConfirm: '.js-confirm__button',
        showAskYesNo: '.js-yes-no__button',
        showError: '.js-error__button'
    },
    events: {
        'click @ui.showConfirm': showInfo,
        'click @ui.showAskYesNo': showSuccess,
        'click @ui.showError': showError
    }
});

export default function () {
    return new CanvasView({
        view: new View()
    });
}
