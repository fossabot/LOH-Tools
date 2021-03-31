import Vue from 'vue'
import { Layout, Row, Col, Icon, Space, Menu } from 'ant-design-vue'

Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Space)

Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Footer.name, Layout.Footer)

Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
