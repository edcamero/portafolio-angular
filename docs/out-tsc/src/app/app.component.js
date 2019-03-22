import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(_infoPaginaService) {
        this._infoPaginaService = _infoPaginaService;
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InfoPageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map