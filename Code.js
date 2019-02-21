/**
 * Get the most recent form response object from a Google Form.
 * To learn more about what to do with the formResponse, see:
 * https://developers.google.com/apps-script/reference/forms/form-response
 */
function getLatestFormResponse() {
    var form = FormApp.openById('1H9sq4Z6m1a7hk-UAktQ_k9zLdkY-HtnlAHolWsLmdeQ');
    var latestFormResponse = form.getResponses().slice(-1)[0];
    Logger.log(latestFormResponse);
}

/**
 * Get request to a basic RESTful API
 * The URL Fetch service can issue HTTP and HTTPS requests and receive repsonses
 * https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String)
 */
function getRequestToApi() {
    var numbersApi = 'http://numbersapi.com/81';
    var response = UrlFetchApp.fetch(numbersApi).getContentText();
    Logger.log(response);
}


/**
 * Responds with true if the date is today and false if the date is not today
 *
 * @param {date} date to compare to today's date
 */
function isDateToday(date) {
    var date = Utilities.formatDate(date, "GMT-5", "yyyy-MM-dd");
    var today = Utilities.formatDate (new Date(), "GMT-5", "yyyy-MM-dd");
    if (date === today) { return true; }
    return false;
}

/**
 * Retrieves the raw text of a document from the document's id
 *
 * @param {documentId} documentId the id of the document
 */

function getDocumentBodyTextById(documentId) {
    var document = DocumentApp.openById(documentId);
    return document.getBody().getText();
}

/**
 * Sends an htmlBody email with a noReply setting
 *
 * @param {string} subject is the title of the email
 * @param {string} recipient is who to send the email to
 * @param {string} htmlBody is the html content of the email to be sent
 * @param {boolean} noReply is either true or false, true will make email no reply
 */
function sendHtmlEmail(subject, recipient, htmlBody, noReply) {
    MailApp.sendEmail({
        to: recipient,
        subject: subject,
        htmlBody: htmlBody,
        noReply: noReply
    });
}


/**
 * Google Apps Script Hangout Chat Bots do not come with default instructions.
 * Call Messages.helpMessage() anytime somebody types @BotName help to return
 * this card.
 */
var Messages = {
    helpMessage: function() {
        return {
            cards: [{
                header: {
                    title: 'Insert BotName here',
                    subtitle: 'Less than 20 character purpose of bot',
                    imageUrl: 'https:// link to hosted png image at leaset 128x128',
                    imageStyle: 'IMAGE'
                },
                sections: [
                    {
                        widgets: [{
                            keyValue: {
                                topLabel: 'Synopsis',
                                content: '@BotName "command"'
                            }
                        }]

                    },
                    {
                        header: 'Description',
                        widgets: [{
                            textParagraph: {
                                text: '@BotName provides the following functionality...'
                            }
                        }]
                    },
                    {
                        widgets: [{
                            buttons: [{
                                textButton: {
                                    text: 'SEE THE CODE (REPO)',
                                    onClick: {
                                        openLink: {
                                            url: 'https://linktocoderepo.com'
                                        }
                                    }
                                }
                            }]
                        }]
                    },
                    {
                        wigets: [{
                            buttons: [{
                                textButton: {
                                    text: 'PROVIDE FEEDBACK',
                                    onClick: {
                                        openLink: {
                                            url: 'https://linktocoderepo.com/issues/new'
                                        }
                                    }
                                }
                            }]
                        }]
                    }
                ]
            }]
        };
    }
};