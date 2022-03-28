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
/*!******************************!*\
  !*** ./modules/TasksList.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Tasks {
    constructor() {
        this.tasks = [];
    }
    initialize() {
        const stored = localStorage.getItem('taskData');
        if (stored) {
            this.tasks = JSON.parse(stored).map((task, index) => new Task(task.description, task.completed, index + 1));
            this.setHtml();
        }
        this.setup();
    }
    setup() {
        this.setupRemove();
        this.setupComplete();
        this.setupClearAll();
    }
    setupClearAll() {
        document.getElementById('clear').addEventListener('click', () => {
            this.assignTasks(this.tasks.filter(task => !task.completed));
        })
    }
    assignTasks(tasks = this.tasks) {
        const newTasks = []
        tasks.forEach((t, index) => {
            newTasks.push(new Task(t.description, t.completed, index + 1, t.editable))
        })
        this.tasks = newTasks;
        localStorage.setItem('taskData', JSON.stringify(this.tasks.map((t, index) => ({...t, index: index }))));
        this.setHtml();
        this.setup();
    }
    setupRemove() {
        hamburger()
        const del = document.querySelectorAll('.del')
        del.forEach((button) => {
            const removeFunc = () => {
                const index = parseInt(button.id.replace('del-', ''))
                const newTasks = this.tasks.filter(t => t.index !== index + 1);
                this.assignTasks(newTasks);
            }
            button.onclick = removeFunc;
        });

        const edit = document.querySelectorAll('.edit')
        console.log(edit);
        edit.forEach((button, index) => {
            button.addEventListener('click', () => {
                console.log(index);
                this.tasks[index].editable = true;
                this.assignTasks();
                const input = document.getElementById(`input-${index}`);
                console.log(input);
                input.addEventListener('change', (e) => {
                    e.preventDefault();
                    this.tasks[index].description = e.target.value;
                    this.tasks[index].editable = false;
                    this.assignTasks();
                });
            });
        });

    }

    setupComplete() {
        const checkboxList = document.querySelectorAll('.check');
        checkboxList.forEach((checkbox, index) => {
            checkbox.addEventListener('click', () => {
                this.tasks[parseInt(checkbox.id.replace('checkbox-', ''))].completed = checkbox.checked;
                this.assignTasks();
            });
        });
    }

    check() {
        const check = document.querySelector('link');
        check.foreach((box, i) => {
            box.addEventListener('click', () => {

            })
        })
    }
    newTask(description, completed, index) {
        const task = new Task(description, completed, this.tasks.length + 1);
        this.tasks.push(task);
        this.assignTasks()
        return task;
    }

    getBookList() {
        let containerHtml = '';
        this.tasks.forEach((task) => {
            containerHtml += task.getHtml();
        });
        return containerHtml;
    }

    setHtml() {
        const container = document.getElementById('tasks');
        container.innerHTML = this.getBookList();
        this.setupRemove();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza3NMaXN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVGQUF1RixvQkFBb0I7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxNQUFNO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9UYXNrc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjbGFzcyBUYXNrcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrRGF0YScpO1xyXG4gICAgICAgIGlmIChzdG9yZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrcyA9IEpTT04ucGFyc2Uoc3RvcmVkKS5tYXAoKHRhc2ssIGluZGV4KSA9PiBuZXcgVGFzayh0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmNvbXBsZXRlZCwgaW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SHRtbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwUmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENvbXBsZXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENsZWFyQWxsKCk7XHJcbiAgICB9XHJcbiAgICBzZXR1cENsZWFyQWxsKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFzc2lnblRhc2tzKHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suY29tcGxldGVkKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFzc2lnblRhc2tzKHRhc2tzID0gdGhpcy50YXNrcykge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tzID0gW11cclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKG5ldyBUYXNrKHQuZGVzY3JpcHRpb24sIHQuY29tcGxldGVkLCBpbmRleCArIDEsIHQuZWRpdGFibGUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy50YXNrcyA9IG5ld1Rhc2tzO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrRGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MubWFwKCh0LCBpbmRleCkgPT4gKHsuLi50LCBpbmRleDogaW5kZXggfSkpKSk7XHJcbiAgICAgICAgdGhpcy5zZXRIdG1sKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gICAgc2V0dXBSZW1vdmUoKSB7XHJcbiAgICAgICAgaGFtYnVyZ2VyKClcclxuICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsJylcclxuICAgICAgICBkZWwuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGJ1dHRvbi5pZC5yZXBsYWNlKCdkZWwtJywgJycpKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih0ID0+IHQuaW5kZXggIT09IGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lnblRhc2tzKG5ld1Rhc2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ub25jbGljayA9IHJlbW92ZUZ1bmM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coZWRpdCk7XHJcbiAgICAgICAgZWRpdC5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza3NbaW5kZXhdLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaWduVGFza3MoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0LSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza3NbaW5kZXhdLmVkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NpZ25UYXNrcygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENvbXBsZXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gICAgICAgIGNoZWNrYm94TGlzdC5mb3JFYWNoKChjaGVja2JveCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzW3BhcnNlSW50KGNoZWNrYm94LmlkLnJlcGxhY2UoJ2NoZWNrYm94LScsICcnKSldLmNvbXBsZXRlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lnblRhc2tzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGluaycpO1xyXG4gICAgICAgIGNoZWNrLmZvcmVhY2goKGJveCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBuZXdUYXNrKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIHRoaXMudGFza3MubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIHRoaXMuYXNzaWduVGFza3MoKVxyXG4gICAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvb2tMaXN0KCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXJIdG1sID0gJyc7XHJcbiAgICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckh0bWwgKz0gdGFzay5nZXRIdG1sKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SHRtbCgpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5nZXRCb29rTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBSZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9