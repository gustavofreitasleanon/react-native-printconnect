var { Platform, NativeModules } = require("react-native");
var RNSendIntentAndroid = NativeModules.SendIntentAndroid || {};

var SendIntentAndroid = {
    print(variables) {
        return RNSendIntentAndroid.print(variables || {});
    },
    printBarcode(barcode) {
        return RNSendIntentAndroid.printBarcode(barcode);
    },
    printBarcodeText(barcode, text) {
        return RNSendIntentAndroid.printBarcodeText(barcode, text);
    },
    printBarcodeText2(barcode, text) {
        return RNSendIntentAndroid.printBarcodeText2(barcode, text);
    },
    printBarcodeText3(barcode, text) {
        return RNSendIntentAndroid.printBarcodeText3(barcode, text);
    },
};

module.exports = SendIntentAndroid;
