"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("../services/post.service");
var UserComponent = (function () {
    function UserComponent(postService) {
        this.postService = postService;
        this.name = 'Task 1';
        this.address = {
            street: 'rue AA',
            city: 'Lyon'
        };
        this.buttonCaption = true;
        console.log(this.address);
    }
    UserComponent.prototype.toggleCaption = function () {
        this.buttonCaption = !this.buttonCaption;
    };
    UserComponent.prototype.getData = function () {
        var _this = this;
        this.postService.postMethode()
            .subscribe(function (rez) {
            console.log(rez);
            _this.posts = rez;
            console.log(_this.posts);
        }, function (err) {
            console.log(err);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n    <h1>Hello {{name}}</h1>\n    <button (click)=\"toggleCaption()\">{{buttonCaption ? 'true v' : 'false v'}}</button>\n    <button *ngIf=\"buttonCaption\" (click)=\"getData()\">get data</button>\n    <br>\n    <p>name:\n      <input type=\"text\" [(ngModel)]=\"name\">\n    </p>\n    <p>street:\n      <input type=\"text\" [(ngModel)]=\"address.street\">\n    </p>\n    <p>city:\n      <input type=\"text\" [(ngModel)]=\"address.city\">\n    </p>\n    <p>{{address | json}}</p>\n    \n    <hr>\n    <about></about>\n    <hr>\n    <p *ngFor=\"let post of posts\"> {{post.id}} {{post.title}}</p>\n  ",
        providers: [post_service_1.PostService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map