Object.defineProperty(exports,"__esModule",{value:true});var _Colors=require('./Colors');var _Colors2=_interopRequireDefault(_Colors);
var _Responsive=require('./Responsive');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}exports.default=

{
display4:{
color:_Colors2.default.blackSecondary,
fontFamily:'Roboto-Light',
fontSize:112,

lineHeight:112},

display3:{
color:_Colors2.default.blackSecondary,
fontFamily:'Roboto-Regular',
fontSize:56,

lineHeight:56},

display2:{
color:_Colors2.default.blackSecondary,
fontFamily:'Roboto-Regular',
fontSize:45,
lineHeight:48},

display1:{
color:_Colors2.default.blackSecondary,
fontFamily:'Roboto-Regular',
fontSize:34,
lineHeight:40},

headline:{
color:_Colors2.default.blackPrimary,
fontFamily:'Roboto-Regular',
fontSize:24,
lineHeight:32},

title:{
color:_Colors2.default.blackPrimary,
fontFamily:'Roboto-Medium',
fontSize:20,

lineHeight:28},

subheading:_defineProperty({
color:_Colors2.default.blackPrimary,
fontFamily:'Roboto-Regular',
fontSize:16,
lineHeight:24},
_Responsive.Breakpoints.ml,{fontSize:15}),

body2:_defineProperty({
color:_Colors2.default.blackPrimary,
fontFamily:'Roboto-Medium',
fontSize:14,
lineHeight:24},
_Responsive.Breakpoints.ml,{fontSize:13}),

body1:_defineProperty({
color:_Colors2.default.blackPrimary,
fontFamily:'Roboto-Regular',
fontSize:14,
lineHeight:20},
_Responsive.Breakpoints.ml,{fontSize:13}),

caption:{
color:_Colors2.default.blackSecondary,
fontFamily:'Roboto-Regular',
fontSize:12,

lineHeight:16}};