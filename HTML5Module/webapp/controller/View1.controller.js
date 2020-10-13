sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONMODEL) {
        "use strict";

        return Controller.extend("ns.HTML5Module.controller.View1", {
            onInit: function () {

                var JModel = new JSONMODEL();
                    JModel.loadData("JSON/MyData.json");
                    // this.getView().byId('idList1').setModel(JModel);
                    //  this.getView().byId('id1').setModel(JModel);
                     this.getView().byId('table3').setModel(JModel);


            },
            onButtonPress: function (Event) {
                var dynTex = this.getView().byId('id1')._lastValue;
                window.alert(dynTex);
            }
        });
    });
