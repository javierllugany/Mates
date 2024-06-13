const raw = {
  frontpage: require('./templates/matesygatitos.js'),
//  contacto: require('./templates/contacto.js'),
}

const templates = {
  buildPage: function(pagename,data){
    if(raw[pagename]) return raw[pagename](data)
  },
  buildError: function(nr){
    return 'oops, something went wrong del template';
  },
};

module.exports = templates;
