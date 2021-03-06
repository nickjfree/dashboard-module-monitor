import CommonalertsIndex from '@Monitor/views/commonalert'
import commonalertsCreate from '@Monitor/views/commonalert/create'
import commonalertsUpdate from '@Monitor/views/commonalert/update'
import Explorer from '@Monitor/views/explorer'
import Layout from '@/layouts/RouterView'
import { hasSetupKey } from '@/utils/auth'
import i18n from '@/locales'

export default {
  meta: {
    label: i18n.t('monitor.text_1'),
    t: 'dictionary.monitor_commonalert',
  },
  submenus: [
    {
      path: '/explorer',
      meta: {
        label: 'Metrics Explorer',
        t: 'dictionary.explorer',
        hidden: () => !hasSetupKey(['onestack', 'private', 'public', 'vmware']),
      },
      component: Layout,
      children: [
        {
          name: 'Explorer',
          path: '',
          component: Explorer,
        },
      ],
    },
    {
      path: '/commonalerts',
      meta: {
        label: i18n.t('monitor.text_2'),
        t: 'dictionary.commonalert',
        permission: 'commonalerts_list',
        hidden: () => !hasSetupKey(['onestack', 'private', 'public', 'vmware']),
      },
      component: Layout,
      children: [
        {
          name: 'CommonalertsIndex',
          path: '',
          component: CommonalertsIndex,
        },
        {
          name: 'CommonalertCreate',
          path: 'create',
          component: commonalertsCreate,
        },
        {
          name: 'CommonalertUpdate',
          path: ':id/update',
          component: commonalertsUpdate,
        },
      ],
    },
  ],
}
