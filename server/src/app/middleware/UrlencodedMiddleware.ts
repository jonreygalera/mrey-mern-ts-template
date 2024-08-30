import bodyParser from 'body-parser';

export default class UrlencodeMiddleware {

  handle() {
     return bodyParser.urlencoded({ extended: true });
  }
}