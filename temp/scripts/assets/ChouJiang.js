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