# react-widget-browser
The goal of this repo is to be able to build a react widget css module compatible in production that can be used directly with browser with create-react-app. So you can use your component inside <script> tag like this:

```js
<div id="root"></div>

<script src="/react-widget-browser.min.js"></script>

<script>
  ReactWidgetBrowserBundle.ReactDOM.render(
    ReactWidgetBrowserBundle.React.createElement(
      ReactWidgetBrowserBundle.ReactWidgetBrowser,
      {textProps: 'hello my ReactWidgetBrowser from my script browser'},
    ),
    document.getElementById('root')
  );
</script>
```

### dependency
packages | Version
--- | ---
webpack | 4.x
@babel/cli | 7.x
babel-loader | 8.x
css-loader | 1.0.0 (do not work with 2.x)

### Commands
command | Description
--- | ---
**yarn** | install dependency
**yarn start** | run dev mode
**yarn build** | build browser compatible into /dist -> react-widget-browser.min.js
**yarn serve:dist** | serve the /dist into localhost:5000

### PropTypes
Properties | Type | Description
--- | --- | ---
**textProps** | String | the text of the div

### Example of usage
```js
<ReactWidgetBrowser
    textProps={'hello my ReactWidgetBrowser from my create react app'}
/>
```
