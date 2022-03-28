/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./modules/Tasks.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(description, completed, index, editable) {
        this.description = description;
        this.completed = completed || false;
        this.index = index;
        this.editable = editable || false;
    }

    getHtml() {
            return ` <li class="task" draggable="true">
            <div class="description">
         <input type="checkbox" class="check"  id="checkbox-${this.index-1}" ${this.completed ? "checked": ""}/>
         ${!this.editable ? `<p class="text">${this.description}</p>` : ''}
         ${this.editable ? `<input value='${this.description}' id="input-${this.index-1}"/>` : ''}</div>
      <div id="myLinks-${this.index-1}" style="display:none" class="list" >
      <a href="#" class='del' id="del-${this.index - 1}">Delete</a>
      <a href="#" class='edit'>Edit</a>
    </div>
      <button class="remove" id="remove-${this.index-1}"><i class="fa-solid fa-ellipsis-vertical ellips"></i></button>
      </li>`;
 }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxhQUFhLElBQUksK0JBQStCO0FBQzlHLFdBQVcsb0NBQW9DLGlCQUFpQjtBQUNoRSxXQUFXLGlDQUFpQyxpQkFBaUIsY0FBYyxhQUFhLFVBQVU7QUFDbEcseUJBQXlCLGFBQWE7QUFDdEMsd0NBQXdDLGVBQWU7QUFDdkQ7QUFDQTtBQUNBLDBDQUEwQyxhQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL1Rhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCwgZWRpdGFibGUpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGUgPSBlZGl0YWJsZSB8fCBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIdG1sKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCA8bGkgY2xhc3M9XCJ0YXNrXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tcIiAgaWQ9XCJjaGVja2JveC0ke3RoaXMuaW5kZXgtMX1cIiAke3RoaXMuY29tcGxldGVkID8gXCJjaGVja2VkXCI6IFwiXCJ9Lz5cclxuICAgICAgICAgJHshdGhpcy5lZGl0YWJsZSA/IGA8cCBjbGFzcz1cInRleHRcIj4ke3RoaXMuZGVzY3JpcHRpb259PC9wPmAgOiAnJ31cclxuICAgICAgICAgJHt0aGlzLmVkaXRhYmxlID8gYDxpbnB1dCB2YWx1ZT0nJHt0aGlzLmRlc2NyaXB0aW9ufScgaWQ9XCJpbnB1dC0ke3RoaXMuaW5kZXgtMX1cIi8+YCA6ICcnfTwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwibXlMaW5rcy0ke3RoaXMuaW5kZXgtMX1cIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIGNsYXNzPVwibGlzdFwiID5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz0nZGVsJyBpZD1cImRlbC0ke3RoaXMuaW5kZXggLSAxfVwiPkRlbGV0ZTwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz0nZWRpdCc+RWRpdDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCIgaWQ9XCJyZW1vdmUtJHt0aGlzLmluZGV4LTF9XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbCBlbGxpcHNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgIDwvbGk+YDtcclxuIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=