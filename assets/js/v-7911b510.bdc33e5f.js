"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78750],{68075:(e,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-7911b510",path:"/advanced/support-new-devices/01_support_new_devices.html",title:"Support new devices",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Instructions",slug:"instructions",children:[{level:3,title:"1. Pairing the device with Zigbee2MQTT",slug:"_1-pairing-the-device-with-zigbee2mqtt",children:[]},{level:3,title:"2. Adding your device",slug:"_2-adding-your-device",children:[]},{level:3,title:"3. Adding converter(s) for your device",slug:"_3-adding-converter-s-for-your-device",children:[]},{level:3,title:"4. Add device picture to zigbee2mqtt.io documentation",slug:"_4-add-device-picture-to-zigbee2mqtt-io-documentation",children:[]},{level:3,title:"Done!",slug:"done",children:[]}]}],filePathRelative:"advanced/support-new-devices/01_support_new_devices.md",git:{updatedTime:1642968665e3}}},90494:(e,n,s)=>{s.r(n),s.d(n,{default:()=>sn});var t=s(66252),a=s(95669);const o=(0,t._)("h1",{id:"support-new-devices",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#support-new-devices","aria-hidden":"true"},"#"),(0,t.Uk)(" Support new devices")],-1),r=(0,t.Uk)("Zigbee2MQTT uses "),l={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("zigbee-herdsman-converters"),c=(0,t.Uk)(" to parse messages to and from devices."),p=(0,t.Uk)("This page will guide you through the process of adding support for new devices to "),u={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("zigbee-herdsman-converters"),_=(0,t.Uk)("."),d=(0,t.Uk)("In case you require any help feel free to create an "),m={href:"https://github.com/Koenkk/zigbee2mqtt/issues",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("issue"),g=(0,t.Uk)("."),h=(0,t._)("strong",null,"Before",-1),U=(0,t.Uk)(" starting, first check if you devices is not already supported in the Zigbee2MQTT dev branch! This can be done by searching on your Zigbee model (see step 1 below) in any of the files "),v={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("here"),y=(0,t.Uk)("."),x=(0,t._)("h2",{id:"instructions",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),(0,t.Uk)(" Instructions")],-1),w=(0,t._)("h3",{id:"_1-pairing-the-device-with-zigbee2mqtt",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_1-pairing-the-device-with-zigbee2mqtt","aria-hidden":"true"},"#"),(0,t.Uk)(" 1. Pairing the device with Zigbee2MQTT")],-1),T=(0,t._)("p",null,"The first step is to pair the device with Zigbee2MQTT. It should be possible to pair your unsupported device out of the box because Zigbee2MQTT can pair with any zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.",-1),z=(0,t._)("p",null,"Once you successfully paired the device you will see something like:",-1),M=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired\nZigbee2MQTT:warn  2019-11-09T12:19:56: Device '0x00158d0001dc126a' with Zigbee model 'lumi.sens' and manufacturer name 'some_name' is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html\n")]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br")])],-1),q=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"TIP"),(0,t._)("p",null,"Make sure that joining is enabled, otherwise new devices cannot join the network.")],-1),Z=(0,t._)("h3",{id:"_2-adding-your-device",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_2-adding-your-device","aria-hidden":"true"},"#"),(0,t.Uk)(" 2. Adding your device")],-1),W=(0,t._)("p",null,[(0,t.Uk)("The next step is to create an external converter file. This file has to be created next to the "),(0,t._)("code",null,"configuration.yaml"),(0,t.Uk)(", in this example we will call it "),(0,t._)("code",null,"WSDCGQ01LM.js"),(0,t.Uk)(" (make sure it ends with "),(0,t._)("code",null,".js"),(0,t.Uk)("). In order to provide support for e.g. the "),(0,t._)("code",null,"lumi.sens"),(0,t.Uk)(" from step 1 we would add the following to this file:")],-1),Q=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" fz "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/converters/fromZigbee'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" tz "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/converters/toZigbee'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" exposes "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/lib/exposes'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" reporting "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/lib/reporting'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" extend "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/lib/extend'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" e "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" exposes"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("presets"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" ea "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" exposes"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("access"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" definition "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    zigbeeModel"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'lumi.sens'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// The model ID from: Device with modelID 'lumi.sens' is not supported."),(0,t.Uk)("\n    model"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'WSDCGQ01LM'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Vendor model number, look on the device for a model number"),(0,t.Uk)("\n    vendor"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Xiaomi'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Vendor of the device (only used for documentation and startup logging)"),(0,t.Uk)("\n    description"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'MiJia temperature & humidity sensor'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Description of the device, copy from vendor site. (only used for documentation and startup logging)"),(0,t.Uk)("\n    fromZigbee"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// We will add this later"),(0,t.Uk)("\n    toZigbee"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Should be empty, unless device can be controlled (e.g. lights, switches)."),(0,t.Uk)("\n    exposes"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("e"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"battery"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" e"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"temperature"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" e"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"humidity"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\nmodule"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("exports "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" definition"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br")])],-1),C=(0,t._)("p",null,[(0,t.Uk)("Now set the Zigbee2MQTT "),(0,t._)("code",null,"log_level"),(0,t.Uk)(" to "),(0,t._)("code",null,"debug"),(0,t.Uk)(" and enable the external converter by adding the following to your Zigbee2MQTT "),(0,t._)("code",null,"configuration.yaml"),(0,t.Uk)(".")],-1),j=(0,t._)("div",{class:"language-yaml ext-yml line-numbers-mode"},[(0,t._)("pre",{class:"language-yaml"},[(0,t._)("code",null,[(0,t._)("span",{class:"token key atrule"},"advanced"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token key atrule"},"log_level"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" debug\n"),(0,t._)("span",{class:"token key atrule"},"external_converters"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"-"),(0,t.Uk)(" WSDCGQ01LM.js\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br")])],-1),D=(0,t._)("p",null,"Once finished, restart Zigbee2MQTT and trigger some actions on the device. You will see messages like:",-1),I=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{\"measuredValue\":2512}'\n")]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),K=(0,t.Uk)("In case your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a "),S=(0,t._)("code",null,"configure:",-1),P=(0,t.Uk)(" section. It may help to look at similar "),R={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},A=(0,t.Uk)("devices"),L=(0,t.Uk)("."),N={class:"custom-container tip"},E=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),G=(0,t.Uk)("If your device is advertised as TuYa compatible or reports anything with "),O=(0,t._)("code",null,"manuSpecificTuya",-1),V=(0,t.Uk)(" additional instructions for adding your device can be found "),Y=(0,t.Uk)("here"),F=(0,t.Uk)("."),B=(0,t._)("p",null,"Some basic external converter examples:",-1),H={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.js",target:"_blank",rel:"noopener noreferrer"},J=(0,t.Uk)("Bulb (light)"),X={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.js",target:"_blank",rel:"noopener noreferrer"},$=(0,t.Uk)("Plug (switch)"),ee={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},ne=(0,t.Uk)("Advanced example"),se=(0,t.Uk)("Definitions of already supported devices can be found "),te={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},ae=(0,t.Uk)("here"),oe=(0,t.Uk)(". It may help to look at devices from the same vendor or type."),re=(0,t._)("h3",{id:"_3-adding-converter-s-for-your-device",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_3-adding-converter-s-for-your-device","aria-hidden":"true"},"#"),(0,t.Uk)(" 3. Adding converter(s) for your device")],-1),le=(0,t.Uk)("In order to parse the messages of your Zigbee device we need to add converter(s). Probably existing converters can be reused, those can be found "),ie={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/converters/fromZigbee.js",target:"_blank",rel:"noopener noreferrer"},ce=(0,t.Uk)("here"),pe=(0,t.Uk)("."),ue=(0,t.Uk)("For e.g. the following message we could use the already existing "),ke={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/5c069a34beecc9250d642d02e84f2808af1b4fae/converters/fromZigbee.js#L304",target:"_blank",rel:"noopener noreferrer"},_e=(0,t._)("code",null,"fz.temperature",-1),de=(0,t.Uk)(" converter"),me=(0,t.Uk)(":"),be=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{\"measuredValue\":2512}'\n")]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),ge=(0,t._)("p",null,"Now update your external converter.",-1),he=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" fz "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/converters/fromZigbee'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" tz "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/converters/toZigbee'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" exposes "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/lib/exposes'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" reporting "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/lib/reporting'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" extend "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'zigbee-herdsman-converters/lib/extend'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" e "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" exposes"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("presets"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" ea "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" exposes"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("access"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" definition "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    zigbeeModel"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'lumi.sens'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    model"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'WSDCGQ01LM'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    vendor"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Xiaomi'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    description"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'MiJia temperature & humidity sensor'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    fromZigbee"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("fz"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("temperature"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// <-- added here"),(0,t.Uk)("\n    toZigbee"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    exposes"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("e"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"battery"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" e"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"temperature"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" e"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"humidity"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\nmodule"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("exports "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" definition"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br")])],-1),Ue=(0,t._)("p",null,[(0,t.Uk)("Repeat until your device does not produce any more log messages like: "),(0,t._)("code",null,"2018-5-1 18:19:41 WARN No converter available for 'WSDCGQ01LM' with....")],-1),ve=(0,t.Uk)("In case you need to add custom converters you can find an external converter example "),fe={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},ye=(0,t.Uk)("here"),xe=(0,t.Uk)(". In case none of the existing converters fit you can add custom ones, external converter example for this can be found "),we={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},Te=(0,t.Uk)("here"),ze=(0,t.Uk)("."),Me=(0,t._)("h4",{id:"_3-1-retrieving-color-temperature-range-only-required-for-lights-which-support-color-temperature",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_3-1-retrieving-color-temperature-range-only-required-for-lights-which-support-color-temperature","aria-hidden":"true"},"#"),(0,t.Uk)(" 3.1 Retrieving color temperature range (only required for lights which support color temperature)")],-1),qe=(0,t._)("p",null,[(0,t.Uk)('If your device is a light and supports color temperature you need to define the color temperature range. This range indicates the minimum and maximum color temperature value the light supports. This can be retrieved by clicking on your device in the frontend, go to "Dev console". For cluster select '),(0,t._)("code",null,"LColorCtrl"),(0,t.Uk)(", for attribute "),(0,t._)("code",null,"colorTempPhysicalMin"),(0,t.Uk)(" and "),(0,t._)("code",null,"colorTempPhysicalMax"),(0,t.Uk)(', after that click on "Read". Now the min/max color temperature will be read as marked below')],-1),Ze=(0,t._)("p",null,[(0,t._)("img",{src:a,alt:"colortemp_min_max"})],-1),We=(0,t._)("p",null,[(0,t.Uk)("Alternatively this can be retrieved from the light by sending to "),(0,t._)("code",null,"zigbee2mqtt/DEVICE_FRIENDLY_NAME/set"),(0,t.Uk)(" with payload "),(0,t._)("code",null,'{"read": {"cluster": "lightingColorCtrl", "attributes": ["colorTempPhysicalMin", "colorTempPhysicalMax"]}}')],-1),Qe=(0,t._)("p",null,"The result will be logged to the Zigbee2MQTT log, e.g.",-1),Ce=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,'Zigbee2MQTT:info  2021-03-21 21:10:40: Read result of \'lightingColorCtrl\': {"colorTempPhysicalMin":153,"colorTempPhysicalMax":454}\n')]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),je=(0,t._)("p",null,[(0,t.Uk)("In the above example set "),(0,t._)("code",null,"colorTempRange"),(0,t.Uk)(" to "),(0,t._)("code",null,"{colorTempRange: [153, 454]}"),(0,t.Uk)(", e.g.:")],-1),De=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" definition "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    zigbeeModel"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'myZigbeeModel'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    model"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'myModel'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    vendor"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'myVendor'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    description"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Super bulb'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    extend"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" extend"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"light_onoff_brightness_colortemp"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("colorTempRange"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token number"},"153"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"454"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// <---"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br")])],-1),Ie=(0,t._)("h3",{id:"_4-add-device-picture-to-zigbee2mqtt-io-documentation",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_4-add-device-picture-to-zigbee2mqtt-io-documentation","aria-hidden":"true"},"#"),(0,t.Uk)(" 4. Add device picture to zigbee2mqtt.io documentation")],-1),Ke=(0,t._)("p",null,"To make sure a picture is available for this device on the supported devices page and in the frontend:",-1),Se=(0,t.Uk)("Clone "),Pe={href:"https://github.com/Koenkk/zigbee2mqtt.io",target:"_blank",rel:"noopener noreferrer"},Re=(0,t.Uk)("zigbee2mqtt.io"),Ae=(0,t._)("li",null,[(0,t.Uk)("Optional: Add a markdown file for your device to "),(0,t._)("code",null,"docs/devices"),(0,t.Uk)(", use the "),(0,t._)("code",null,"model"),(0,t.Uk)(" property of your definition as the filename.")],-1),Le=(0,t._)("li",null,[(0,t.Uk)("Add a picture ("),(0,t._)("code",null,".jpg"),(0,t.Uk)(", 150x150) to "),(0,t._)("code",null,"public/images/devices"),(0,t.Uk)(" and link it in file of the previous step.")],-1),Ne=(0,t.Uk)("Create a Pull Request to "),Ee={href:"https://github.com/Koenkk/zigbee2mqtt.io",target:"_blank",rel:"noopener noreferrer"},Ge=(0,t.Uk)("zigbee2mqtt.io"),Oe=(0,t.Uk)("."),Ve=(0,t._)("p",null,[(0,t.Uk)("On the next release of Zigbee2MQTT, the documentation will be updated and your device file will be linked in "),(0,t._)("code",null,"../../supported-devices.md"),(0,t.Uk)(" automatically.")],-1),Ye=(0,t._)("h3",{id:"done",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#done","aria-hidden":"true"},"#"),(0,t.Uk)(" Done!")],-1),Fe=(0,t.Uk)("Now it's time to submit a pull request to "),Be={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},He=(0,t.Uk)("zigbee-herdsman-converters"),Je=(0,t.Uk)(" so this device is supported out of the box by Zigbee2MQTT. This can be done by adding the definition to the "),Xe={href:"https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/devices",target:"_blank",rel:"noopener noreferrer"},$e=(0,t.Uk)("vendor file"),en=(0,t.Uk)(" of your device. 😃"),nn={},sn=(0,s(83744).Z)(nn,[["render",function(e,n){const s=(0,t.up)("OutboundLink"),a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("p",null,[r,(0,t._)("a",l,[i,(0,t.Wm)(s)]),c]),(0,t._)("p",null,[p,(0,t._)("a",u,[k,(0,t.Wm)(s)]),_]),(0,t._)("p",null,[d,(0,t._)("a",m,[b,(0,t.Wm)(s)]),g]),(0,t._)("p",null,[h,U,(0,t._)("a",v,[f,(0,t.Wm)(s)]),y]),x,w,T,z,M,q,Z,W,Q,C,j,D,I,(0,t._)("p",null,[K,S,P,(0,t._)("a",R,[A,(0,t.Wm)(s)]),L]),(0,t._)("div",N,[E,(0,t._)("p",null,[G,O,V,(0,t.Wm)(a,{to:"/advanced/support-new-devices/02_support_new_tuya_devices.html"},{default:(0,t.w5)((()=>[Y])),_:1}),F])]),B,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",H,[J,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",X,[$,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",ee,[ne,(0,t.Wm)(s)])]),(0,t._)("li",null,[se,(0,t._)("a",te,[ae,(0,t.Wm)(s)]),oe])]),re,(0,t._)("p",null,[le,(0,t._)("a",ie,[ce,(0,t.Wm)(s)]),pe]),(0,t._)("p",null,[ue,(0,t._)("a",ke,[_e,de,(0,t.Wm)(s)]),me]),be,ge,he,Ue,(0,t._)("p",null,[ve,(0,t._)("a",fe,[ye,(0,t.Wm)(s)]),xe,(0,t._)("a",we,[Te,(0,t.Wm)(s)]),ze]),Me,qe,Ze,We,Qe,Ce,je,De,Ie,Ke,(0,t._)("ol",null,[(0,t._)("li",null,[Se,(0,t._)("a",Pe,[Re,(0,t.Wm)(s)])]),Ae,Le,(0,t._)("li",null,[Ne,(0,t._)("a",Ee,[Ge,(0,t.Wm)(s)]),Oe])]),Ve,Ye,(0,t._)("p",null,[Fe,(0,t._)("a",Be,[He,(0,t.Wm)(s)]),Je,(0,t._)("a",Xe,[$e,(0,t.Wm)(s)]),en])],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[s,t]of n)e[s]=t;return e}},95669:(e,n,s)=>{e.exports=s.p+"assets/img/colortemp_min_max.f8104072.png"}}]);