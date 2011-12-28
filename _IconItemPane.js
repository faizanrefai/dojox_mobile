define([
	"dojo/_base/declare",
	"dojo/dom-construct",
	"./Pane",
	"./iconUtils"
], function(declare, domConstruct, Pane, iconUtils){

/*=====
	var IconItemPane = dojox.mobile._IconItemPane
=====*/

	// module:
	//		dojox/mobile/_IconItemPane
	// summary:
	//		An internal widget used for IconContainer.

	return declare("dojox.mobile._IconItemPane", Pane, {
		label: "",
		closeIcon: "mblDomButtonBlueMinus",
		baseClass: "mblIconItemPane",

		buildRendering: function(){
			this.inherited(arguments);
			this.hide();
			this.closeHeaderNode = domConstruct.create("h2", {className:"mblIconItemPaneHeading"}, this.domNode);
			this.closeIconNode = domConstruct.create("div", {className:"mblIconItemPaneIcon"}, this.closeHeaderNode);
			this.labelNode = domConstruct.create("span", {className:"mblIconItemPaneTitle"}, this.closeHeaderNode);
			this.containerNode = domConstruct.create("div", {className:"mblContent"}, this.domNode);
		},

		show: function(){
			this.domNode.style.display = "";
		},

		hide: function(){
			this.domNode.style.display = "none";
		},

		isOpen: function(e){
			return this.domNode.style.display !== "none";
		},

		scrollIntoView: function(){
			this.domNode.scrollIntoView();
		},

		_setLabelAttr: function(/*String*/text){
			this._set("label", text);
			this.labelNode.innerHTML = this._cv ? this._cv(text) : text;
		},

		_setCloseIconAttr: function(icon){
			this._set("closeIcon", icon);
			this.closeIconNode = iconUtils.setIcon(icon, this.iconPos, this.closeIconNode, this.alt, this.closeHeaderNode);
		}
	});
});
