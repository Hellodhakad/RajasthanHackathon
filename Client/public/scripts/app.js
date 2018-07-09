"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestApp = function (_React$Component) {
  _inherits(TestApp, _React$Component);

  function TestApp() {
    _classCallCheck(this, TestApp);

    return _possibleConstructorReturn(this, (TestApp.__proto__ || Object.getPrototypeOf(TestApp)).apply(this, arguments));
  }

  _createClass(TestApp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container-fluid bg-white" },
        React.createElement(Header, null),
        React.createElement(Slider, null),
        React.createElement(Products, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return TestApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      //this return jsx
      return React.createElement(
        "nav",
        { "class": "navbar navbar-expand-lg navbar-light bg-light fixed-top" },
        React.createElement(
          "a",
          { "class": "navbar-brand", href: "#" },
          "Navbar"
        ),
        React.createElement(
          "button",
          {
            "class": "navbar-toggler",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          },
          React.createElement("span", { "class": "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { "class": "collapse navbar-collapse", id: "navbarSupportedContent" },
          React.createElement(
            "ul",
            { "class": "navbar-nav mr-auto" },
            React.createElement(
              "li",
              { "class": "nav-item active" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "#" },
                "Home ",
                React.createElement(
                  "span",
                  { "class": "sr-only" },
                  "(current)"
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "#" },
                "Link"
              )
            )
          ),
          React.createElement(
            "form",
            { "class": "form-inline my-2 my-lg-0" },
            React.createElement("input", {
              "class": "form-control mr-sm-2",
              type: "search",
              placeholder: "Search",
              "aria-label": "Search"
            }),
            React.createElement(
              "button",
              { "class": "btn btn-outline-success my-2 my-sm-0", type: "submit" },
              "Search"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Slider = function (_React$Component3) {
  _inherits(Slider, _React$Component3);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: { "margin-bottom": "5%" }, id: "carouselExampleIndicators", "class": "carousel slide", "data-ride": "carousel" },
        React.createElement(
          "ol",
          { "class": "carousel-indicators" },
          React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "0", "class": "active" }),
          React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "1" }),
          React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "2" })
        ),
        React.createElement(
          "div",
          { "class": "carousel-inner" },
          React.createElement(
            "div",
            { "class": "carousel-item active" },
            React.createElement("img", { "class": "d-block w-100", src: "../public/img/baby.jpg", alt: "First slide" })
          ),
          React.createElement(
            "div",
            { "class": "carousel-item" },
            React.createElement("img", { "class": "d-block w-100", src: "../public/img/b.jpg", alt: "Second slide" })
          ),
          React.createElement(
            "div",
            { "class": "carousel-item" },
            React.createElement("img", { "class": "d-block w-100", src: "../public/img/c.jpg", alt: "Third slide" })
          )
        ),
        React.createElement(
          "a",
          { "class": "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev" },
          React.createElement("span", { "class": "carousel-control-prev-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { "class": "sr-only" },
            "Previous"
          )
        ),
        React.createElement(
          "a",
          { "class": "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next" },
          React.createElement("span", { "class": "carousel-control-next-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { "class": "sr-only" },
            "Next"
          )
        )
      );
    }
  }]);

  return Slider;
}(React.Component);

var Products = function (_React$Component4) {
  _inherits(Products, _React$Component4);

  function Products() {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).apply(this, arguments));
  }

  _createClass(Products, [{
    key: "render",
    value: function render() {
      return React.createElement(Product, null);
    }
  }]);

  return Products;
}(React.Component);

var Product = function (_React$Component5) {
  _inherits(Product, _React$Component5);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "card-deck" },
        React.createElement(
          "div",
          { "class": "card" },
          React.createElement("img", { "class": "card-img-top", src: "../public/img/card1.jpeg", alt: "Card image cap" }),
          React.createElement(
            "div",
            { "class": "card-body" },
            React.createElement(
              "h5",
              { "class": "card-title" },
              "Card title"
            ),
            React.createElement(
              "p",
              { "class": "card-text" },
              "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            )
          ),
          React.createElement(
            "div",
            { "class": "card-footer" },
            React.createElement(
              "small",
              { "class": "text-muted" },
              "Last updated 3 mins ago"
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "card" },
          React.createElement("img", { "class": "card-img-top", src: "../public/img/card1.jpeg", alt: "Card image cap" }),
          React.createElement(
            "div",
            { "class": "card-body" },
            React.createElement(
              "h5",
              { "class": "card-title" },
              "Card title"
            ),
            React.createElement(
              "p",
              { "class": "card-text" },
              "This card has supporting text below as a natural lead-in to additional content."
            )
          ),
          React.createElement(
            "div",
            { "class": "card-footer" },
            React.createElement(
              "small",
              { "class": "text-muted" },
              "Last updated 3 mins ago"
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "card" },
          React.createElement("img", { "class": "card-img-top", src: "../public/img/card1.jpeg", alt: "Card image cap" }),
          React.createElement(
            "div",
            { "class": "card-body" },
            React.createElement(
              "h5",
              { "class": "card-title" },
              "Card title"
            ),
            React.createElement(
              "p",
              { "class": "card-text" },
              "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
            )
          ),
          React.createElement(
            "div",
            { "class": "card-footer" },
            React.createElement(
              "small",
              { "class": "text-muted" },
              "Last updated 3 mins ago"
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "card" },
          React.createElement("img", { "class": "card-img-top", src: "../public/img/card1.jpeg", alt: "Card image cap" }),
          React.createElement(
            "div",
            { "class": "card-body" },
            React.createElement(
              "h5",
              { "class": "card-title" },
              "Card title"
            ),
            React.createElement(
              "p",
              { "class": "card-text" },
              "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
            )
          ),
          React.createElement(
            "div",
            { "class": "card-footer" },
            React.createElement(
              "small",
              { "class": "text-muted" },
              "Last updated 3 mins ago"
            )
          )
        )
      );
    }
  }]);

  return Product;
}(React.Component);

var Footer = function (_React$Component6) {
  _inherits(Footer, _React$Component6);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container-fluid bg-dark", style: { "height": "200px", "margin-top": "5%", "": "" } },
        "hidden"
      );
    }
  }]);

  return Footer;
}(React.Component);

ReactDOM.render(React.createElement(TestApp, null), document.getElementById("root"));
