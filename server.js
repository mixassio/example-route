import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import routes from './src/routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);
const app = express();

app.get('*', (req, res) => {
  let context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Switch>
        {routes.map((route, key) => RouteWithSubroutes(route, key))}
      </Switch>
    </StaticRouter>,
  );
  const html = `
  <!doctype html>
  <html>
    <head>
      <title>Basic</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>
  `;
  res.status(context.status || 200);
  res.send(html);
});

app.listen(3000, console.log('port is 3000'));
