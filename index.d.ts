declare namespace SendIntentAndroid {
  const print: (variables: { [index: string]: string }) => Promise<boolean>
  const printBarcode: (barcode: string) => Promise<boolean>
  const printBarcodeText: (barcode: string, text: string) => Promise<boolean>
  const printBarcodeText2: (barcode: string, text: string) => Promise<boolean>
  const printBarcodeText3: (barcode: string, text: string) => Promise<boolean>
}

export = SendIntentAndroid
