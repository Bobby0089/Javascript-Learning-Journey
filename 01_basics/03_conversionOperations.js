// DataTypes Conversion

//String -> Number
let strToNum1 = Number("Bobby")
let strToNum2 = Number("123")
let strToNum3 = Number("1234abcd")
let strToNum4 = Number("")
let strToNum5 = Number("    ")

//Number -> String
let numToStr1 = String(12345)

//Boolean -> Number
let boolToNum1 = Number(true)
let boolToNum2 = Number(false)

//Number -> Boolean
let numToBool1 = Boolean(123)
let numToBool2 = Boolean(0)
let numToBool3 = Boolean(-123)

//String -> Boolean
let strToBool1 = Boolean("")
let strToBool2 = Boolean(" ")
let strToBool3 = Boolean("abc")

//Boolean -> String
let boolToStr1 = String(true)
let boolToStr2 = String(false)

//null
let nullToNum1 = Number(1234)
let nullToNum2 = Number(0)
let nullToNum3 = Number()
let nullToStr1 = String("")
let nullToStr2 = String("  ")
let nullToStr3 = String("abc")

console.table([
    {Operation: "strToNum1 Bobby", value: strToNum1, TypeOf: typeof(strToNum1)},
    {Operation: "strToNum2 123", value: strToNum2, TypeOf: typeof(strToNum2)},
    {Operation: "strToNum3 1234abcd", value: strToNum3, TypeOf: typeof(strToNum3)},
    {Operation: "strToNum4 () ", value: strToNum4, TypeOf: typeof(strToNum4)},
    {Operation: "strToNum5 (  )", value: strToNum5, TypeOf: typeof(strToNum5)},
    {Operation: "numToStr1 12345", value: numToStr1, TypeOf: typeof(numToStr1)},
    {Operation: "boolToNum1 true", value: boolToNum1, TypeOf: typeof(boolToNum1)},
    {Operation: "boolToNum2 false", value: boolToNum2, TypeOf: typeof(boolToNum2)},
    {Operation: "numToBool1 123", value: numToBool1, TypeOf: typeof(numToBool1)},
    {Operation: "numToBool2  0", value: numToBool2, TypeOf: typeof(numToBool2)},
    {Operation: "numToBool3 -123", value: numToBool3, TypeOf: typeof(numToBool3)},
    {Operation: "strToBool1 ()", value: strToBool1, TypeOf: typeof(strToBool1)},
    {Operation: "strToBool2 (  )", value: strToBool2, TypeOf: typeof(strToBool2)},
    {Operation: "strToBool3  abc", value: strToBool3, TypeOf: typeof(strToBool3)},
    {Operation: "boolToStr1  true", value: boolToStr1, TypeOf: typeof(boolToStr1)},
    {Operation: "boolToStr2 false", value: boolToStr2, TypeOf: typeof(boolToStr2)},
    {Operation: "nullToNum1 1234", value: nullToNum1, TypeOf: typeof(nullToNum1)},
    {Operation: "nullToNum2 0", value: nullToNum2, TypeOf: typeof(nullToNum2)},
    {Operation: "nullToNum3 ()", value: nullToNum3, TypeOf: typeof(nullToNum3)},
    {Operation: "nullToStr1 ()", value: nullToStr1, TypeOf: typeof(nullToStr1)},
    {Operation: "nullToStr2 (  )", value: nullToStr2, TypeOf: typeof(nullToStr2)},
    {Operation: "nullToStr3  abc", value: nullToStr3, TypeOf: typeof(nullToStr3)}
])



// ---- Implicit Conversions ----

// Number + String → String
let addExample = 10 + "5";            // "105"

// String - Number → Number
let subExample = "10" - 5;            // 5

// String * Number → Number
let mulExample = "6" * 2;             // 12

// String / Number → Number
let divExample = "15" / 3;            // 5

// Boolean + Number
let boolNumAdd = true + 5;            // 6 (true → 1)

// ---- Special Cases ----

// null → Number
let nullToNum = Number(null);         // 0

// undefined → Number
let undefToNum = Number(undefined);   // NaN


