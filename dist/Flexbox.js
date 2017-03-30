'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var string = _react.PropTypes.string,
    oneOf = _react.PropTypes.oneOf,
    node = _react.PropTypes.node,
    number = _react.PropTypes.number,
    bool = _react.PropTypes.bool,
    object = _react.PropTypes.object;


var Flexbox = (0, _styledComponents2.default)(function (_ref) {
  var alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      children = _ref.children,
      display = _ref.display,
      element = _ref.element,
      flex = _ref.flex,
      flexBasis = _ref.flexBasis,
      flexDirection = _ref.flexDirection,
      flexGrow = _ref.flexGrow,
      flexShrink = _ref.flexShrink,
      flexWrap = _ref.flexWrap,
      height = _ref.height,
      justifyContent = _ref.justifyContent,
      margin = _ref.margin,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      marginTop = _ref.marginTop,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth,
      minHeight = _ref.minHeight,
      minWidth = _ref.minWidth,
      order = _ref.order,
      padding = _ref.padding,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight,
      paddingTop = _ref.paddingTop,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ['alignContent', 'alignItems', 'alignSelf', 'children', 'display', 'element', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'height', 'justifyContent', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'order', 'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'width']);

  return _react2.default.createElement(element, props, children);
})(_templateObject, function (props) {
  return props.alignContent ? 'align-content: ' + props.alignContent + ';' : '';
}, function (props) {
  return props.alignSelf ? 'align-self: ' + props.alignSelf + ';' : '';
}, function (props) {
  return props.alignItems ? 'align-items: ' + props.alignItems + ';' : '';
}, function (props) {
  return props.display ? 'display: ' + props.display + ';' : '';
}, function (props) {
  return props.flex ? 'flex: ' + props.flex + ';' : '';
}, function (props) {
  return props.flexBasis ? 'flex-basis: ' + props.flexBasis + ';' : '';
}, function (props) {
  return props.flexDirection ? 'flex-direction: ' + props.flexDirection + ';' : '';
}, function (props) {
  return props.flexGrow ? 'flex-grow: ' + props.flexGrow + ';' : '';
}, function (props) {
  return props.flexShrink ? 'flex-shrink: ' + props.flexShrink + ';' : '';
}, function (props) {
  return props.flexWrap ? 'flex-wrap: ' + props.flexWrap + ';' : '';
}, function (props) {
  return props.height ? 'height: ' + props.height + ';' : '';
}, function (props) {
  return props.justifyContent ? 'justify-content: ' + props.justifyContent + ';' : '';
}, function (props) {
  return props.margin ? 'margin: ' + props.margin + ';' : '';
}, function (props) {
  return props.marginBottom ? 'margin-bottom: ' + props.marginBottom + ';' : '';
}, function (props) {
  return props.marginLeft ? 'margin-left: ' + props.marginLeft + ';' : '';
}, function (props) {
  return props.marginRight ? 'margin-right: ' + props.marginRight + ';' : '';
}, function (props) {
  return props.marginTop ? 'margin-top: ' + props.marginTop + ';' : '';
}, function (props) {
  return props.maxHeight ? 'max-height: ' + props.maxHeight + ';' : '';
}, function (props) {
  return props.maxWidth ? 'max-width: ' + props.maxWidth + ';' : '';
}, function (props) {
  return props.minHeight ? 'min-height: ' + props.minHeight + ';' : '';
}, function (props) {
  return props.minWidth ? 'min-width: ' + props.minWidth + ';' : '';
}, function (props) {
  return props.order ? 'order: ' + props.order + ';' : '';
}, function (props) {
  return props.padding ? 'padding: ' + props.padding + ';' : '';
}, function (props) {
  return props.paddingBottom ? 'padding-bottom: ' + props.paddingBottom + ';' : '';
}, function (props) {
  return props.paddingLeft ? 'padding-left: ' + props.paddingLeft + ';' : '';
}, function (props) {
  return props.paddingRight ? 'padding-right: ' + props.paddingRight + ';' : '';
}, function (props) {
  return props.paddingTop ? 'padding-top: ' + props.paddingTop + ';' : '';
}, function (props) {
  return props.width ? 'width: ' + props.width + ';' : '';
});

Flexbox.propTypes = {
  alignContent: oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  children: node,
  display: oneOf(['flex', 'inline-flex']),
  element: oneOf(['article', 'aside', 'div', 'figure', 'footer', 'header', 'main', 'nav', 'section']),
  flex: string,
  flexBasis: string,
  flexDirection: oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: number,
  flexShrink: number,
  flexWrap: oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  height: string,
  inline: bool,
  justifyContent: oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  margin: string,
  marginBottom: string,
  marginLeft: string,
  marginRight: string,
  marginTop: string,
  maxHeight: string,
  maxWidth: string,
  minHeight: string,
  minWidth: string,
  order: number,
  padding: string,
  paddingBottom: string,
  paddingLeft: string,
  paddingRight: string,
  paddingTop: string,
  style: object,
  width: string
};

Flexbox.defaultProps = {
  display: 'flex',
  element: 'div'
};

exports.default = Flexbox;