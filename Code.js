function getLatestFormResponse() {
    var form = FormApp.openById('1H9sq4Z6m1a7hk-UAktQ_k9zLdkY-HtnlAHolWsLmdeQ');
    var latestResponse = form.getResponses().slice(-1)[0];
    Logger.log(latestResponse);
}
