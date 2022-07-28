"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  var _user$address;

  var user = {
    name: 'Diego'
  };
  console.log((_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street);
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello world");
}
