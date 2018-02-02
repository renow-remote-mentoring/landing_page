window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-110965898-1');

function registerInterest(mentor) {
  gtag('event', 'click', {
    'event_category': 'open mentor detail',
    'event_label': mentor
  });
  console.log('reqister interest: ' + mentor);
}

function navLinkTrack(destination) {
  gtag('event', 'click', {
    'event_category': 'navigation',
    'event_label': destination
  });
  console.log('Nav to : ' + destination);
}

function homePageLinkTrack(destination) {
  gtag('event', 'click', {
    'event_category': 'navigation',
    'event_label': destination
  });
  console.log('Go to : ' + destination);
}

function footerLinkTrack(destination) {
  gtag('event', 'click', {
    'event_category': 'footer',
    'event_label': destination
  });
  console.log('Go to : ' + destination);
}

function signMeUp(mentor) {
  gtag('event', 'sign_up', {
    'event_category': 'mentor modal',
    'event_label': mentor
  });
  console.log('Signed up to : ' + mentor);
}

function closeModal(mentor) {
  gtag('event', 'close', {
    'event_category': 'mentor modal',
    'event_label': mentor
  });
  console.log('Close : ' + mentor);
}
