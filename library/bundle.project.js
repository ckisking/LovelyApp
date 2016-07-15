require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ChouJiang":[function(require,module,exports){
"use strict";
cc._RFpush(module, '76258gA6cJGfqhGMPxEdmEq', 'ChouJiang');
// ChouJiang.js

cc.Class({
    "extends": cc.Component,

    properties: {
        imags: {
            "default": null,
            type: cc.Node
        },
        p1: {
            "default": null,
            type: cc.Sprite
        },
        p2: {
            "default": null,
            type: cc.Sprite
        },
        p3: {
            "default": null,
            type: cc.Sprite
        },
        p4: {
            "default": null,
            type: cc.Sprite
        },
        p5: {
            "default": null,
            type: cc.Sprite
        },
        p6: {
            "default": null,
            type: cc.Sprite
        },
        p7: {
            "default": null,
            type: cc.Sprite
        },
        p8: {
            "default": null,
            type: cc.Sprite
        },
        label: {
            "default": null,
            type: cc.Label
        },
        time: {
            "default": 4
        },
        flagCounting: false,
        spriteFrameArray: null
    },

    _callback: function _callback() {},

    randomImages: function randomImages() {
        this.p1.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
        this.p2.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
        this.p3.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
        this.p4.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
        this.p5.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
        this.p6.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
        this.p7.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
        this.p8.spriteFrame = this.spriteFrameArray[(87 * Math.random()).toFixed(0)];
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        cc.loader.loadResAll("positions", cc.SpriteFrame, function (err, spriteFrames) {
            if (err) {
                cc.error(err.msg);
            } else {
                cc.log(spriteFrames.length);
                self.spriteFrameArray = spriteFrames;
                self.randomImages();
                cc.log(self.spriteFrameArray.length);
            }
        });
    },

    // called every frame
    update: function update(dt) {
        if (this.flagCounting) {
            //条件限制
            this.time = (this.time - dt).toFixed(3);
            var t = parseInt(this.time);
            this.label.string = "倒计时: " + t + "秒";
            if (this.time < 0) {
                this.flagCounting = false;
                return;
            }
            var x = this.time - 0.1;
            this.imags.rotation += x * x * 90;
        }
    },

    startClick: function startClick() {
        if (!this.flagCounting) {
            this.flagCounting = true;
            this.time = 4;
        }
    },

    changeImagesClick: function changeImagesClick() {
        this.randomImages();
    }
});

cc._RFpop();
},{}],"Login":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'be8fdp4lVdPKrpy0y9IGsiM', 'Login');
// Login.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        index: 0,

        pwd1: {
            "default": null,
            type: cc.EditBox
        },
        pwd2: {
            "default": null,
            type: cc.EditBox
        },
        pwd3: {
            "default": null,
            type: cc.EditBox
        },
        pwd4: {
            "default": null,
            type: cc.EditBox
        },
        msg: {
            "default": null,
            type: cc.Label
        },
        password: 0

    },

    // use this for initialization
    onLoad: function onLoad() {},

    checkLoginResult: function checkLoginResult() {
        if (this.pwd1.string + this.pwd2.string + this.pwd3.string + this.pwd4.string == "2616") {
            cc.director.loadScene("choujiang");
        } else {
            //this.msg.string = this.pwd1.string +  this.pwd2.string +  this.pwd3.string +  this.pwd4.string ;
            this.msg.string = '密码错误,请重新输入';
            this.index = 0;
            this.pwd1.string = "";
            this.pwd2.string = "";
            this.pwd3.string = "";
            this.pwd4.string = "";
        }
    },

    singleLinePassword1EditBoxDidBeginEditing: function singleLinePassword1EditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line password1 editBoxDidBeginEditing");
    },

    singleLinePassword1EditBoxDidChanged: function singleLinePassword1EditBoxDidChanged(text, sender) {
        this.pwd1.string = "";
        if (text === '') return;
        this.index++;
        cc.log(sender.node.name + " single line password " + this.index + "editBoxDidChanged: " + text);
        //this.msg.string = this.password;

        if (this.index > 4) return;
        if (this.index == 1) {
            this.password = text[0];
        } else if (this.index == 2) {
            this.pwd2.string = text[0];
        } else if (this.index == 3) {
            this.pwd3.string = text[0];
        } else if (this.index == 4) {
            this.pwd4.string = text[0];
            this.pwd1.string = this.password;
            this.checkLoginResult();
        }
    },

    singleLinePassword1EditBoxDidEndEditing: function singleLinePassword1EditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidEndEditing: " + this.pwd1.string);
        this.pwd1.string = this.pwd1.string[0];
    },

    singleLinePassword4EditBoxDidChanged: function singleLinePassword4EditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line password editBoxDidChanged: " + text);
        if (text.length > 0) {
            this.checkLoginResult();
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}]},{},["ChouJiang","Login"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL0Nob3VKaWFuZy5qcyIsImFzc2V0cy9Mb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3NjI1OGdBNmNKR2ZxaEdNUHhFZG1FcScsICdDaG91SmlhbmcnKTtcbi8vIENob3VKaWFuZy5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaW1hZ3M6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBwMToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgcDI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIHAzOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICBwNDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgcDU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIHA2OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICBwNzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgcDg6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIGZsYWdDb3VudGluZzogZmFsc2UsXG4gICAgICAgIHNwcml0ZUZyYW1lQXJyYXk6IG51bGxcbiAgICB9LFxuXG4gICAgX2NhbGxiYWNrOiBmdW5jdGlvbiBfY2FsbGJhY2soKSB7fSxcblxuICAgIHJhbmRvbUltYWdlczogZnVuY3Rpb24gcmFuZG9tSW1hZ2VzKCkge1xuICAgICAgICB0aGlzLnAxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgICAgICB0aGlzLnAyLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgICAgICB0aGlzLnAzLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgICAgICB0aGlzLnA0LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgICAgICB0aGlzLnA1LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgICAgICB0aGlzLnA2LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgICAgICB0aGlzLnA3LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgICAgICB0aGlzLnA4LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycmF5Wyg4NyAqIE1hdGgucmFuZG9tKCkpLnRvRml4ZWQoMCldO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0FsbChcInBvc2l0aW9uc1wiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWVzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1zZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhzcHJpdGVGcmFtZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNwcml0ZUZyYW1lQXJyYXkgPSBzcHJpdGVGcmFtZXM7XG4gICAgICAgICAgICAgICAgc2VsZi5yYW5kb21JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coc2VsZi5zcHJpdGVGcmFtZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5mbGFnQ291bnRpbmcpIHtcbiAgICAgICAgICAgIC8v5p2h5Lu26ZmQ5Yi2XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAodGhpcy50aW1lIC0gZHQpLnRvRml4ZWQoMyk7XG4gICAgICAgICAgICB2YXIgdCA9IHBhcnNlSW50KHRoaXMudGltZSk7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5YCS6K6h5pe2OiBcIiArIHQgKyBcIuenklwiO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsYWdDb3VudGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy50aW1lIC0gMC4xO1xuICAgICAgICAgICAgdGhpcy5pbWFncy5yb3RhdGlvbiArPSB4ICogeCAqIDkwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0Q2xpY2s6IGZ1bmN0aW9uIHN0YXJ0Q2xpY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5mbGFnQ291bnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhZ0NvdW50aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlSW1hZ2VzQ2xpY2s6IGZ1bmN0aW9uIGNoYW5nZUltYWdlc0NsaWNrKCkge1xuICAgICAgICB0aGlzLnJhbmRvbUltYWdlcygpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYmU4ZmRwNGxWZFBLcnB5MHk5SUdzaU0nLCAnTG9naW4nKTtcbi8vIExvZ2luLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgaW5kZXg6IDAsXG5cbiAgICAgICAgcHdkMToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH0sXG4gICAgICAgIHB3ZDI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveFxuICAgICAgICB9LFxuICAgICAgICBwd2QzOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfSxcbiAgICAgICAgcHdkNDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH0sXG4gICAgICAgIG1zZzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDogMFxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBjaGVja0xvZ2luUmVzdWx0OiBmdW5jdGlvbiBjaGVja0xvZ2luUmVzdWx0KCkge1xuICAgICAgICBpZiAodGhpcy5wd2QxLnN0cmluZyArIHRoaXMucHdkMi5zdHJpbmcgKyB0aGlzLnB3ZDMuc3RyaW5nICsgdGhpcy5wd2Q0LnN0cmluZyA9PSBcIjI2MTZcIikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY2hvdWppYW5nXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90aGlzLm1zZy5zdHJpbmcgPSB0aGlzLnB3ZDEuc3RyaW5nICsgIHRoaXMucHdkMi5zdHJpbmcgKyAgdGhpcy5wd2QzLnN0cmluZyArICB0aGlzLnB3ZDQuc3RyaW5nIDtcbiAgICAgICAgICAgIHRoaXMubXNnLnN0cmluZyA9ICflr4bnoIHplJnor68s6K+36YeN5paw6L6T5YWlJztcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wd2QxLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnB3ZDIuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMucHdkMy5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5wd2Q0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2luZ2xlTGluZVBhc3N3b3JkMUVkaXRCb3hEaWRCZWdpbkVkaXRpbmc6IGZ1bmN0aW9uIHNpbmdsZUxpbmVQYXNzd29yZDFFZGl0Qm94RGlkQmVnaW5FZGl0aW5nKHNlbmRlcikge1xuICAgICAgICBjYy5sb2coc2VuZGVyLm5vZGUubmFtZSArIFwiIHNpbmdsZSBsaW5lIHBhc3N3b3JkMSBlZGl0Qm94RGlkQmVnaW5FZGl0aW5nXCIpO1xuICAgIH0sXG5cbiAgICBzaW5nbGVMaW5lUGFzc3dvcmQxRWRpdEJveERpZENoYW5nZWQ6IGZ1bmN0aW9uIHNpbmdsZUxpbmVQYXNzd29yZDFFZGl0Qm94RGlkQ2hhbmdlZCh0ZXh0LCBzZW5kZXIpIHtcbiAgICAgICAgdGhpcy5wd2QxLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmICh0ZXh0ID09PSAnJykgcmV0dXJuO1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgc2luZ2xlIGxpbmUgcGFzc3dvcmQgXCIgKyB0aGlzLmluZGV4ICsgXCJlZGl0Qm94RGlkQ2hhbmdlZDogXCIgKyB0ZXh0KTtcbiAgICAgICAgLy90aGlzLm1zZy5zdHJpbmcgPSB0aGlzLnBhc3N3b3JkO1xuXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID4gNCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gdGV4dFswXTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMucHdkMi5zdHJpbmcgPSB0ZXh0WzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPT0gMykge1xuICAgICAgICAgICAgdGhpcy5wd2QzLnN0cmluZyA9IHRleHRbMF07XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSA0KSB7XG4gICAgICAgICAgICB0aGlzLnB3ZDQuc3RyaW5nID0gdGV4dFswXTtcbiAgICAgICAgICAgIHRoaXMucHdkMS5zdHJpbmcgPSB0aGlzLnBhc3N3b3JkO1xuICAgICAgICAgICAgdGhpcy5jaGVja0xvZ2luUmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2luZ2xlTGluZVBhc3N3b3JkMUVkaXRCb3hEaWRFbmRFZGl0aW5nOiBmdW5jdGlvbiBzaW5nbGVMaW5lUGFzc3dvcmQxRWRpdEJveERpZEVuZEVkaXRpbmcoc2VuZGVyKSB7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgc2luZ2xlIGxpbmUgcGFzc3dvcmQgZWRpdEJveERpZEVuZEVkaXRpbmc6IFwiICsgdGhpcy5wd2QxLnN0cmluZyk7XG4gICAgICAgIHRoaXMucHdkMS5zdHJpbmcgPSB0aGlzLnB3ZDEuc3RyaW5nWzBdO1xuICAgIH0sXG5cbiAgICBzaW5nbGVMaW5lUGFzc3dvcmQ0RWRpdEJveERpZENoYW5nZWQ6IGZ1bmN0aW9uIHNpbmdsZUxpbmVQYXNzd29yZDRFZGl0Qm94RGlkQ2hhbmdlZCh0ZXh0LCBzZW5kZXIpIHtcbiAgICAgICAgY2MubG9nKHNlbmRlci5ub2RlLm5hbWUgKyBcIiBzaW5nbGUgbGluZSBwYXNzd29yZCBlZGl0Qm94RGlkQ2hhbmdlZDogXCIgKyB0ZXh0KTtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0xvZ2luUmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyJdfQ==
