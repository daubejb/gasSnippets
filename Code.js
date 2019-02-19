/*
 * Get the most recent form response object from a Google Form.
 * To learn more about what to do with the formResponse, see:
 * https://developers.google.com/apps-script/reference/forms/form-response
 */
function getLatestFormResponse() {
    var form = FormApp.openById('1H9sq4Z6m1a7hk-UAktQ_k9zLdkY-HtnlAHolWsLmdeQ');
    var latestFormResponse = form.getResponses().slice(-1)[0];
    Logger.log(latestFormResponse);
}
