"use strict";
(self["webpackChunkdecidim_app_review"] = self["webpackChunkdecidim_app_review"] || []).push([["_asdf_installs_ruby_3_0_2_lib_ruby_gems_3_0_0_bundler_gems_decidim-a25b5c74f78d_decidim-core_-eba137"],{

/***/ "../../../.asdf/installs/ruby/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-a25b5c74f78d/decidim-core/app/packs/src/decidim/autocomplete.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../../.asdf/installs/ruby/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-a25b5c74f78d/decidim-core/app/packs/src/decidim/autocomplete.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoComplete; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var AutoComplete = /*#__PURE__*/function () {
  function AutoComplete(el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, AutoComplete);

    this.element = el;
    this.stickySelectedSpan = null;
    this.clearStickySelectionSpan = null;
    this.stickyHiddenInput = null;
    this.promptDiv = null;
    var thresholdTemp = options.threshold || 2;
    this.options = Object.assign({
      // Defines name of the hidden input (e.g. assembly_member[user_id])
      name: null,
      // Placeholder of the visible input field
      placeholder: "",
      // Defines what happens after user has selected value from suggestions
      // sticky - Allows selecting a single value and not editing the value after selected (e.g. as the admin autocomplete fields)
      // single - Allows selecting a single value and editing the selected text after the selection (e.g. geocoding field)
      // multi - Allows selecting multiple values
      // null (default) - Disable selection event handling in this class
      mode: null,
      // Defines if we show input help (e.g. "Type at least three characters to search") or not.
      searchPrompt: false,
      // Defines search prompt message, only shown if showPrompt is enabled!
      searchPromptText: "Type at least ".concat(thresholdTemp, " characters to search"),
      // Defines items that are selected already when page is loaded before user selects them. (e.g. when form submit fails)
      selected: null,
      // Defines how many characters input has to have before we start searching
      threshold: thresholdTemp,
      // Defines how many results to show in the autocomplete selection list
      // by maximum.
      maxResults: 10,
      // Defines the data keys against which to match the user input when
      // searching through the results. For example, when the following
      // data is returned by the API:
      //   { id: 123, name: "John", nickname: "john", __typename: "User" }
      //
      // You can define the data keys array as ["name", "nickname"] in
      // which case the results shown to user would be only those that
      // have matching text in these defined fields.
      dataMatchKeys: null,
      // The data source is a method that gets the callback parameter as
      // its first argument which should be called with the results array
      // once they are returned by the API.
      // For example:
      //   (query, callback) => {
      //     (async () => {
      //       const results = await callAjax(`/api/url?query=${query}`);
      //       callback(results);
      //     })();
      //   }
      //
      // Signature: (callback: Function)
      dataSource: function dataSource() {
        return [];
      },
      // Filters the data list returned by the data source before it is shown
      // to the user. Can be used e.g. to hide already selected values from
      // the list.
      dataFilter: null,
      // Delay in milliseconds how long to wait after user action before
      // doing a backend request.
      delay: 200,
      // Allows modifying the suggested items before they are displayed in the list
      // Signature: (element: HTMLElement, value: Object)
      modifyResult: null
    }, options);
    this.autocomplete = new (_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_1___default())({
      selector: function selector() {
        return _this.element;
      },
      placeHolder: options.placeholder,
      // Delay (milliseconds) before autocomplete engine starts. It's preventing many queries when user is typing fast.
      debounce: 200,
      threshold: this.options.threshold,
      data: {
        keys: this.options.dataMatchKeys,
        src: function () {
          var _src = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(query) {
            var fetchResults;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    fetchResults = function fetchResults() {
                      return new Promise(function (resolve) {
                        _this.options.dataSource(query, resolve);
                      });
                    };

                    _context.prev = 1;
                    _context.next = 4;
                    return fetchResults();

                  case 4:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);
                    return _context.abrupt("return", _context.t0);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[1, 7]]);
          }));

          function src(_x) {
            return _src.apply(this, arguments);
          }

          return src;
        }(),
        filter: function filter(list) {
          if (_this.options.dataFilter) {
            return _this.options.dataFilter(list);
          }

          return list;
        }
      },
      resultsList: {
        maxResults: this.options.maxResults
      },
      resultItem: {
        element: function element(item, data) {
          if (!_this.options.modifyResult) {
            return;
          }

          _this.options.modifyResult(item, data.value);
        }
      },
      events: {
        input: {
          blur: function blur() {
            _this.promptDiv.style.display = "none";
          }
        }
      }
    });
    this.acWrapper = this.element.closest(".autoComplete_wrapper");
    this.element.ac = this.autocomplete; // Stop input field from bubbling open and close events to parent elements,
    // because foundation closes modal from these events.

    var stopPropagation = function stopPropagation(event) {
      event.stopPropagation();
    };

    this.element.addEventListener("close", stopPropagation);
    this.element.addEventListener("open", stopPropagation);
    this.createPromptDiv();

    switch (this.options.mode) {
      case "sticky":
        this.createStickySelect(this.options.name);
        break;

      case "multi":
        this.createMultiSelect(this.options.name);
        break;

      default:
    }
  }

  _createClass(AutoComplete, [{
    key: "setInput",
    value: function setInput(value) {
      this.autocomplete.input.value = value;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      switch (this.options.mode) {
        case "single":
          this.setInput(event.detail.selection.value[event.detail.selection.key]);
          break;

        case "sticky":
          this.handleStickyEvents(event);
          break;

        case "multi":
          this.handleMultiEvents(event);
          break;

        default:
      }
    }
  }, {
    key: "handleMultiEvents",
    value: function handleMultiEvents(event) {
      switch (event.type) {
        case "selection":
          this.addMultiSelectItem(event.detail.selection);
          break;

        default:
      }
    }
  }, {
    key: "handleStickyEvents",
    value: function handleStickyEvents(event) {
      switch (event.type) {
        case "selection":
          this.addStickySelectItem(event.detail.selection);
          break;

        case "click":
          if (event.target === this.clearStickySelectionSpan) {
            this.removeStickySelection();
          }

          break;

        case "keyup":
          if (this.stickyHiddenInput.value !== "" && event.target === this.element && (["Escape", "Backspace", "Delete"].includes(event.key) || /^[a-z0-9]$/i.test(event.key))) {
            this.removeStickySelection();
          } else if (this.options.searchPrompt) {
            if (this.stickyHiddenInput.value === "" && this.element.value.length < this.options.threshold) {
              this.promptDiv.style.display = "block";
            } else {
              this.promptDiv.style.display = "none";
            }
          }

          break;

        default:
      }
    }
  }, {
    key: "createHiddenInput",
    value: function createHiddenInput(value) {
      var hiddenInput = document.createElement("input");
      hiddenInput.name = this.options.name;
      hiddenInput.type = "hidden";

      if (value) {
        hiddenInput.value = value;
      }

      this.acWrapper.prepend(hiddenInput);
      return hiddenInput;
    }
  }, {
    key: "removeStickySelection",
    value: function removeStickySelection() {
      this.stickyHiddenInput.value = "";
      this.element.placeholder = this.options.placeholder;
      this.clearStickySelectionSpan.style.display = "none";
      this.stickySelectedSpan.style.display = "none";
    }
  }, {
    key: "addStickySelectItem",
    value: function addStickySelectItem(selection) {
      this.stickyHiddenInput.value = selection.value.value;
      this.element.placeholder = "";
      this.stickySelectedSpan.innerHTML = selection.value[selection.key];
      this.stickySelectedSpan.style.display = "block";
      this.clearStickySelectionSpan.style.display = "block";
      this.setInput("");
    }
  }, {
    key: "addMultiSelectItem",
    value: function addMultiSelectItem(selection) {
      var _this2 = this;

      this.setInput("");
      var chosen = document.createElement("span");
      chosen.classList.add("label", "primary", "autocomplete__selected-item", "multi");
      chosen.innerHTML = selection.value[selection.key];
      var clearSelection = document.createElement("span");
      clearSelection.classList.add("clear-multi-selection");
      clearSelection.innerHTML = "&times;";
      clearSelection.setAttribute("data-remove", selection.value.value);
      clearSelection.addEventListener("click", function (evt) {
        var hiddenInput = _this2.acWrapper.querySelector("input[type='hidden'][value='".concat(selection.value.value, "']"));

        if (hiddenInput) {
          hiddenInput.remove();
          evt.target.parentElement.remove();
        }
      });
      chosen.appendChild(clearSelection);
      var multiSelectWrapper = this.acWrapper.querySelector(".multiselect");
      var inputContainer = multiSelectWrapper.querySelector("span.input-container");
      multiSelectWrapper.insertBefore(chosen, inputContainer);
      this.createHiddenInput(selection.value.value);
    }
  }, {
    key: "createStickySelect",
    value: function createStickySelect() {
      var _this3 = this;

      this.stickySelectedSpan = document.createElement("span");
      this.stickySelectedSpan.classList.add("autocomplete__selected-item", "sticky");
      this.stickySelectedSpan.style.display = "none";
      this.stickySelectedSpan.addEventListener("click", function () {
        return _this3.element.focus();
      });
      this.stickyHiddenInput = this.createHiddenInput();
      this.clearStickySelectionSpan = document.createElement("span");
      this.clearStickySelectionSpan.className = "clear-sticky-selection";
      this.clearStickySelectionSpan.innerHTML = "&times;";
      this.clearStickySelectionSpan.style.display = "none";
      this.clearStickySelectionSpan.addEventListener("click", this);
      this.element.addEventListener("selection", this);
      this.element.addEventListener("keyup", this);
      this.acWrapper.insertBefore(this.clearStickySelectionSpan, this.element);
      this.acWrapper.insertBefore(this.stickySelectedSpan, this.element);

      if (this.options.selected) {
        this.addStickySelectItem(this.options.selected);
      }
    }
  }, {
    key: "createMultiSelect",
    value: function createMultiSelect() {
      var _this4 = this;

      var multiSelectWrapper = document.createElement("div");
      multiSelectWrapper.classList.add("multiselect");
      var inputContainer = document.createElement("span");
      inputContainer.classList.add("input-container");
      multiSelectWrapper.appendChild(inputContainer);
      this.acWrapper.prepend(multiSelectWrapper);
      inputContainer.appendChild(this.element);
      this.element.addEventListener("selection", this);
      multiSelectWrapper.addEventListener("click", function () {
        _this4.element.focus();
      });

      if (this.options.selected) {
        this.options.selected.forEach(function (selection) {
          _this4.addMultiSelectItem(selection);
        });
      }
    }
  }, {
    key: "createPromptDiv",
    value: function createPromptDiv() {
      this.promptDiv = document.createElement("div");
      this.promptDiv.classList.add("search-prompt");
      this.promptDiv.style.display = "none";
      this.promptDiv.innerHTML = this.options.searchPromptText;
      this.acWrapper.appendChild(this.promptDiv);
    }
  }]);

  return AutoComplete;
}();



/***/ })

}]);
//# sourceMappingURL=_asdf_installs_ruby_3_0_2_lib_ruby_gems_3_0_0_bundler_gems_decidim-a25b5c74f78d_decidim-core_-eba137.js.map