基于jQuery实现纯html+css+js富客户端UI组件框架
# Introduction #
DWZ富客户端框架即jQuery RIA framework．基于jQuery实现纯html+css+js富客户端UI组件框架.

在线演示地址 http://demo.dwzjs.com
源码下载地址 http://code.google.com/p/dwz/

如有需要可做定制化开发.

# Details #

框架的设计思路有些类似Flex, 第一次打开页面时载入整个界面到浏览器端. 之后和服务器的交互只是数据交互,客户端不会再去下载html, css, js等和界面相关的网络流量. 这样可以占用最少的网络带宽.

DWZ富客户端框是纯html+css+js富客户端, 通用性好，主流浏览器都直接html+css+js.


DWZ富客户端框相比Flex的主要优势是：
  * Flex企业级级应用还很少, 只有部分开发者感兴趣才深入研究，而且他们也对Flex做企业级应用还迟怀疑态度．Ajax 在各方面相对成熟的多．
  * Flex中绝大多数文字都无法复制, 通过System.setClipboard(text)也只是把某个组件中的文字复制出来.
  * Flex流浏览器必须安装flash插件, 而有些单位规定浏览器不能安装flash插件．
  * Flex的打印支持也不好，flex需要通过专门的打印组件. 而且打印效果不好.
  * Flex做的界面SEO不好做，搜索引擎很难从flash中读取内容．