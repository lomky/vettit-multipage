if(process.env.APP_STAGE){
  switch(process.env.APP_STAGE){
    case 'prod':
      exports.domain = "volunteercheck.org";
      exports.protocol = "https://";
      break;

    case 'stage':
      exports.domain = "vettit.org";
      exports.protocol = "https://";
      break;

    case 'dev':
      exports.domain = "a.vettit:3000";
      exports.protocol = "http://";
      break;

    default:
      exports.domain = "localhost";
      exports.protocol = "http://";
  }
}else{
  throw new Error("You must set the APP_STAGE env variable for initialization to work.");
}


