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

/*
 * Get request to a basic RESTful API
 * The URL Fetch service can issue HTTP and HTTPS requests and receive repsonses
 * https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String)
 */
function getRequestToApi() {
    var numbersApi = 'http://numbersapi.com/81';
    var response = UrlFetchApp.fetch(numbersApi).getContentText();
    Logger.log(response);
}
