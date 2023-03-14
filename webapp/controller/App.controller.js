sap.ui.define(
  ["sap/m/MessageToast", "sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (MessageToast, Controller) {
    "use strict";

    return Controller.extend("hogent.helloworldvclocal.controller.App", {
      onInit: function () {},

      onPress: function (oEvent) {
        var msg =
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.";
        MessageToast.show(msg);
      },
    });
  }
);
