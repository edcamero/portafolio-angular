import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var InfoPageService = /** @class */ (function () {
    function InfoPageService(http) {
        this.http = http;
        console.log("SE ha cargado la pagina");
        this.http.get('assets/data/data-pagina.json').subscribe(function (resp) {
            console.log(resp['twitter']);
        });
    }
    InfoPageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], InfoPageService);
    return InfoPageService;
}());
export { InfoPageService };
//# sourceMappingURL=info-page.service.js.map