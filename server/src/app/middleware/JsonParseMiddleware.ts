import express from 'express';

export default class JsonParseMiddleware {

  handle() {
     return express.json();
  }
}