export default {
  sendtoLender: (lenderURL) => {
    if (!window.dataLayer) return;
    window.dataLayer.push({
      event: 'send-lender',
      eventLabel: lenderURL,
    });
  },

  sendToLenderGA(lenderURL) {
  window.ga('send', 'event', {
      eventCategory: 'GA',
      eventAction: 'click',
      eventLabel: lenderURL
    });
  }
};