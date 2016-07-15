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