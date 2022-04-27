// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

str = 'я учу javascript!'
strSubstr = str.substr(2, 3)
console.log(strSubstr)

strSubstring = str.substring(1, 5)
console.log(strSubstring)

strSlice = str.slice(1, 5)
console.log(strSlice)