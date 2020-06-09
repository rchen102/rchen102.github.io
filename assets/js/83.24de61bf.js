(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{398:function(_,v,t){"use strict";t.r(v);var s=t(25),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("//TODO：不同请求方法整理，不同状态码整理")]),_._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[_._v("#")]),_._v(" 介绍")]),_._v(" "),t("p",[_._v("Web 的应用层协议是"),t("strong",[_._v("超文本传输协议")]),_._v("（HyperText Transfer Protocol, HTTP），是 Web 的核心")]),_._v(" "),t("p",[_._v("HTTP 由两个程序实现，一个客户程序，一个服务器程序。客户程序与服务器程序运行在不同的端系统中，通过 HTTP 报文进行会话。 HTTP 定义了这些报文的结构以及客户服务器进行报文交换的方式")]),_._v(" "),t("hr"),_._v(" "),t("p",[t("strong",[_._v("工作方式")])]),_._v(" "),t("ul",[t("li",[_._v("HTTP 使用 "),t("strong",[_._v("TCP")]),_._v(" 作为支撑运输协议，TCP 为 HTTP 提供"),t("strong",[_._v("可靠数据传输服务")])]),_._v(" "),t("li",[_._v("客户首先发起一个与服务器的 TCP 连接")]),_._v(" "),t("li",[_._v("一旦连接建立，客户通过它的 socket 接口发送 HTTP "),t("strong",[_._v("请求报文")]),_._v("并从 socket 接口中接收 HTTP "),t("strong",[_._v("响应报文")])]),_._v(" "),t("li",[_._v("类似地，服务器通过它的 socket  接口接收请求报文和发送响应报文")])]),_._v(" "),t("p",[_._v("因为 HTTP 服务器不保存关于客户的任何信息，所以也说 HTTP 是一个"),t("strong",[_._v("无状态协议")])]),_._v(" "),t("hr"),_._v(" "),t("p",[t("strong",[_._v("术语")])]),_._v(" "),t("ul",[t("li",[_._v("Web 页面：也叫文档，由对象组成")]),_._v(" "),t("li",[_._v("对象：一个对象只是一个文件，如一个 HTML 文件、一个 JPG 文件，可以通过一个 URL 地址寻址")]),_._v(" "),t("li",[_._v("URL 地址：一个 URL 地址由两部分组成，存放对象地服务器主机名 + 对象地路径名")])]),_._v(" "),t("h2",{attrs:{id:"非持续连接和持续连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非持续连接和持续连接"}},[_._v("#")]),_._v(" 非持续连接和持续连接")]),_._v(" "),t("p",[_._v("HTTP 协议在"),t("strong",[_._v("默认")]),_._v("方式下使用"),t("strong",[_._v("持续连接")]),_._v("，但是客户和服务器也能"),t("strong",[_._v("配置")]),_._v("成使用"),t("strong",[_._v("非持续连接")])]),_._v(" "),t("h3",{attrs:{id:"_1-非持续连接的-http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-非持续连接的-http"}},[_._v("#")]),_._v(" 1. 非持续连接的 HTTP")]),_._v(" "),t("ul",[t("li",[_._v("客户发起一个到服务器的 TCP 连接")]),_._v(" "),t("li",[_._v("客户向服务器发送 HTTP 请求报文")]),_._v(" "),t("li",[_._v("服务器接收请求报文，发送响应报文")]),_._v(" "),t("li",[_._v("服务器通知 TCP 断开该 TCP 连接（直到 TCP 确认客户已经完整地收到响应报文，才会实际中断连接）")]),_._v(" "),t("li",[_._v("客户接收响应报文，TCP 连接关闭")])]),_._v(" "),t("p",[_._v("对于非持续连接，每个 TCP 连接在服务器发送一个对象后关闭，每个 TCP 连接只传输一个请求报文和一个响应报文")]),_._v(" "),t("p",[_._v("从发起请求到收到文件地整体时间可以通过往返时间（Round-Trip Time，RTT）来衡量。TCP 连接三次握手前两次占用一个 RTT 时间，客户结合第三次握手（确认）向该 TCP 连接发送一个 HTTP 请求，因此"),t("strong",[_._v("总的时间")]),_._v("约等于 2 个 RTT 时间加上服务器传输 HTML 文件的时间")]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"_2-持续连接的-http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-持续连接的-http"}},[_._v("#")]),_._v(" 2. 持续连接的 HTTP")]),_._v(" "),t("p",[_._v("非持续连接问题：（1）为每个请求维护一个全新连接，服务器负担太沉重；（2）每一个对象需要经过两倍 RTT 时间交付")]),_._v(" "),t("ul",[t("li",[_._v("采用持续连接的情况下，服务器在发送响应后保持 TCP 连接打开，相同客户和服务器间的后续请求通过同一个连接进行")]),_._v(" "),t("li",[_._v("客户可以以"),t("strong",[_._v("流水线")]),_._v("的形式，不间断发出请求，而不必等待上一个请求处理完成再发送下一个")]),_._v(" "),t("li",[_._v("如果一条连接经过一定时间仍未被使用， HTTP 服务器则关闭该连接")])]),_._v(" "),t("h2",{attrs:{id:"http-报文格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-报文格式"}},[_._v("#")]),_._v(" HTTP 报文格式")]),_._v(" "),t("h3",{attrs:{id:"_1-http-请求报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-请求报文"}},[_._v("#")]),_._v(" 1. HTTP 请求报文")]),_._v(" "),t("p",[t("img",{attrs:{src:"/img/Network/request-eg.png",alt:"HTTP请求报文"}}),_._v(" "),t("img",{attrs:{src:"/img/Network/request.png",alt:"HTTP请求报文格式"}})]),_._v(" "),t("p",[t("strong",[_._v("1. 请求行")]),_._v("：包含用于请求的方法、请求的 URL 和 HTTP 版本。方法能够取值： GET、POST、HEAD、PUT、DELETE")]),_._v(" "),t("p",[t("strong",[_._v("2. 首部字段")]),_._v("：由多组键值对组成，通过冒号分割，保存了有关请求的重要信息")]),_._v(" "),t("p",[t("strong",[_._v("3. 实体主体")]),_._v("：与首部字段用空行（CR + LF）隔开，用于保存被发送的数据，可以为空")]),_._v(" "),t("h3",{attrs:{id:"_2-http-响应报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-响应报文"}},[_._v("#")]),_._v(" 2. HTTP 响应报文")]),_._v(" "),t("p",[t("img",{attrs:{src:"/img/Network/response-eg.png",alt:"HTTP响应报文"}}),_._v(" "),t("img",{attrs:{src:"/img/Network/response.png",alt:"HTTP响应报文格式"}})]),_._v(" "),t("p",[t("strong",[_._v("1. 状态行")]),_._v("：包含 HTTP 版本、表明响应结果的状态码和原因短语")]),_._v(" "),t("p",[t("strong",[_._v("2. 首部字段")]),_._v("：与请求报文类似，同样由多组键值对组成")]),_._v(" "),t("p",[t("strong",[_._v("3. 实体主体")]),_._v("：与首部字段用空行（CR + LF）隔开，用于保存被发送的数据，可以为空")]),_._v(" "),t("h2",{attrs:{id:"cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[_._v("#")]),_._v(" Cookie")]),_._v(" "),t("p",[_._v("HTTP 服务器是无状态的，简化了服务器的设计，有助于开发高性能的 Web 服务器。然而一个 Web 站点通常希望能够识别用户，为此 HTTP 使用了 cookie 技术")]),_._v(" "),t("p",[_._v("cookie 技术的4个组件")]),_._v(" "),t("ul",[t("li",[_._v("HTTP 响应报文中一个 cookie 首部字段（Set-cookie）")]),_._v(" "),t("li",[_._v("HTTP 请求报文中一个 cookie 首部字段（Cookie）")]),_._v(" "),t("li",[_._v("用户端系统中一个 cookie 文件，由用户浏览器进行管理")]),_._v(" "),t("li",[_._v("位于 Web 站点的一个后端数据库")])]),_._v(" "),t("h2",{attrs:{id:"web-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-缓存"}},[_._v("#")]),_._v(" Web 缓存")]),_._v(" "),t("p",[_._v("Web 缓存器也叫"),t("strong",[_._v("代理服务器")]),_._v("，能够代表初始 Web 服务器来满足 HTTP 请求的网络实体")]),_._v(" "),t("p",[_._v("通过配置，客户对某对象的访问将被定向到 Web 缓存器，Web 缓存器既是服务器也是客户")]),_._v(" "),t("hr"),_._v(" "),t("p",[t("strong",[_._v("工作方式")])]),_._v(" "),t("ul",[t("li",[_._v("客户建立一个到 Web 缓存器的 TCP 连接，向 Web 缓存器发送一个请求某对象的 HTTP 请求")]),_._v(" "),t("li",[_._v("Web 缓存器检查自身，查看本地是否存储了该对象副本，如果有，则使用 HTTP 响应报文返回该对象")]),_._v(" "),t("li",[_._v("如果没有，Web 缓存器打开一个与初始服务器对象的 TCP 连接，并发送一个请求该对象的 HTTP 请求。收到请求后，初始服务器向 Web 缓存器发送具有该对象的 HTTP 响应报文")]),_._v(" "),t("li",[_._v("Web 缓存器接收到该对象后，在本地存储一份对象副本，并向客户端使用 HTTP 响应报文发送对象")])]),_._v(" "),t("hr"),_._v(" "),t("p",[t("strong",[_._v("作用")])]),_._v(" "),t("ul",[t("li",[_._v("能够减少对客户请求的响应时间")]),_._v(" "),t("li",[_._v("能够减少一个机构的接入链路到因特网的通信量")])]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),t("p",[_._v("尽管高速缓存带来了诸多便利，但也存在问题，缓存中的对象副本可能过期。")]),_._v(" "),t("p",[_._v("针对这个问题，可以使用条件 GET 方法解决")])])])}),[],!1,null,null,null);v.default=r.exports}}]);