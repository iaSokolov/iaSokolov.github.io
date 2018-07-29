sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel", 
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";
	return Controller.extend("firstUI5App.controller.firstView", {
		onInit: function (evt) {
			var birthday = new Date(1987, 1, 25);
			var _data = {
				"firstName": "\u0418\u043B\u044C\u044F",
				"lastName": "\u0421\u043E\u043A\u043E\u043B\u043E\u0432",
				"middleName": "\u0410\u043D\u0430\u0442\u043E\u043B\u044C\u0435\u0432\u0438\u0447",
				"birthday": birthday,
				"sex": "male"
			};
			var oModel = new JSONModel(_data);
			this.getView().setModel(oModel, "view");
			var country = {
				"country": [{
					"key": "RU",
					"text": "\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F"
				}, {
					"key": "BY",
					"text": "\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"
				}, {
					"key": "KZ",
					"text": "\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D"
				}]
			};
			var oModelCountry = new JSONModel(country);
			this.getView().setModel(oModelCountry, "country");
		},
		/**
		 *@memberOf firstUI5App.controller.firstView
		 */
		onPressButton1: function (oEvent) {
			MessageToast.show(sap.ui.getCore().byId("inputFirstName").getText());
		}
	});
});