(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{366:function(v,_,t){"use strict";t.r(_);var D=t(25),l=Object(D.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"dns-提供的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-提供的服务"}},[v._v("#")]),v._v(" DNS 提供的服务")]),v._v(" "),t("p",[v._v("因特网上的主机与人一样，可以使用多种方式标识，如主机名（host）或者 IP 地址")]),v._v(" "),t("p",[v._v("域名系统（Domain Name System，DNS）提供主机名到 IP 地址转换的"),t("strong",[v._v("目录服务")]),v._v("，可以给 DNS 下定义：")]),v._v(" "),t("ul",[t("li",[v._v("一个由分层的 DNS 服务器实现的分布式数据库")]),v._v(" "),t("li",[v._v("一个使得主机能够查询分布式数据库的应用层协议")])]),v._v(" "),t("blockquote",[t("p",[v._v("DNS 协议是"),t("strong",[v._v("应用层")]),v._v("协议，运行在 "),t("strong",[v._v("UDP")]),v._v(" 协议之上，归属应用层是因为：")]),v._v(" "),t("ul",[t("li",[v._v("使用客户 - 服务器模式运行在通信的端系统之间")]),v._v(" "),t("li",[v._v("通过下面的端到端运输协议来传送 DNS 报文")])]),v._v(" "),t("p",[v._v("不同于其他应用，DNS 不直接与用户打交道，而是为其他应用层协议提供主机名解析 IP 地址服务")])]),v._v(" "),t("p",[t("strong",[v._v("浏览器访问 URL 的过程")])]),v._v(" "),t("ul",[t("li",[v._v("同一台主机上运行着 DNS 应用的客户端")]),v._v(" "),t("li",[v._v("浏览器从 URL 中抽取主机名（如 www.yahoo.com），并将主机名传给 DNS 应用客户端")]),v._v(" "),t("li",[v._v("DNS 客户端向 DNS 服务器 发送一个包含主机名的请求")]),v._v(" "),t("li",[v._v("DNS 客户端最终会收到一份回答报文，其中含有主机名对应的 IP 地址")]),v._v(" "),t("li",[v._v("浏览器接收到来自 DNS 的 IP 地址，就能够向位于该 IP 地址 80 端口的 HTTP 服务器发起一个 TCP 连接")])]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("DNS 提供的其他服务")])]),v._v(" "),t("ul",[t("li",[v._v("主机别名：主机名复杂的主机可以拥有其他别名，别名比规范主机名更容易记忆")]),v._v(" "),t("li",[v._v("邮件服务器别名：邮件应用可以通过 DNS 对邮件服务器别名进行解析，获得规范主机名和 IP 地址")]),v._v(" "),t("li",[v._v("负载分配：DNS 可以用于在冗余的服务器之间进行负载分配，繁忙的站点可能分布在多个服务器上，此时通常使用一个 IP 地址集合与一个规范主机名相联系，响应请求时，可以循环使用这些地址次序")])]),v._v(" "),t("h2",{attrs:{id:"工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[v._v("#")]),v._v(" 工作原理")]),v._v(" "),t("p",[v._v("DNS 由分布于全球的 DNS 服务器以及定义了 DNS 服务器与查询主机通信方式的应用层协议组成")]),v._v(" "),t("p",[t("strong",[v._v("分布式、层次数据库")]),t("br"),v._v("\nDNS 使用了大量 DNS 服务器，以层级方式组织，大致有 3 种类型")]),v._v(" "),t("ul",[t("li",[v._v("根服务器：记录了相应的顶级域 DNS 服务器的 IP 地址")]),v._v(" "),t("li",[v._v("顶级域服务器（Top Level Domain, TLD）：负责顶级域名如 com、edu 和 gov 等顶级域名")]),v._v(" "),t("li",[v._v("权威服务器：负责一个具体组织机构（如学校或公司），主机名到 IP 地址映射的全部记录")])]),v._v(" "),t("p",[v._v("本地 DNS 服务器：除了层次结构中的三类服务器，另外一种重要的 DNS 服务器。通常与主机邻进，起着代理的作用，当主机发出 DNS 请求时，该请求被发往本地 DNS 服务器，接着被转发到 DNS 服务器层次结构中")]),v._v(" "),t("p",[v._v("DNS 查询例子：假定访问 www.amazon.com")]),v._v(" "),t("ul",[t("li",[v._v("客户首先与根服务器之一联系，返回顶级域名 com 的 TLD 服务器 IP 地址")]),v._v(" "),t("li",[v._v("客户则与这些 TLD 服务器之一联系，返回权威服务器的 IP 地址")]),v._v(" "),t("li",[v._v("最后，客户与 amazon.com 权威服务器之一联系，返回主机名对应的 IP 地址")])]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("DNS 缓存")]),t("br"),v._v("\nDNS 层次结构决定了一次 DNS 查询可能产生多份 DNS 报文，由此造成严重的时延。为了改善时延并减少因特网上传输的 DNS 报文数量，DNS 广泛的使用了缓存技术")]),v._v(" "),t("p",[v._v("在一个请求链中，当某 DNS 服务器接收一个 DNS 回答（即包含了主机名到 IP 地址的映射），它能够将该回答中的映射信息缓存到本地服务器中，这样当针对相同主机名的查询到达时，该服务器就能够迅速提供所需要的 IP 地址，即使它不是该主机名的权威服务器，缓存并不是永久的，通常设置保留 2 天")])])}),[],!1,null,null,null);_.default=l.exports}}]);