// single pages
import homePage from '@/pages/Home.vue'
import notFoundPage from '@/pages/NotFound.vue'

import cars from '@/pages/Vehicles/Cars.vue'
import motorbike from '@/pages/Vehicles/Motorbike.vue'
import bicycle from '@/pages/Vehicles/Bicycle.vue'

import detailTransport from '@/pages/Detail/Car-Detail.vue'

import sellStep from '@/pages/Sell_Step.vue'

import purchaseNew from '@/pages/Purchase/Purchase_Car.vue'
import service from '@/pages/Service.vue'

import confirmRegister from '@/pages/Link/Confirm_Register_Email.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home`, layout: 'default' }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found`, layout: 'default' }
  },

  {
    path: '/transport_car',
    name: 'cars',
    component: cars,
    meta: { title: `${DOMAIN_TITLE} | Cars`, layout: 'default' }
  },
  {
    path: '/transport_motorcycle',
    name: 'motorbike',
    component: motorbike,
    meta: { title: `${DOMAIN_TITLE} | Motorcycle`, layout: 'default' }
  },
  {
    path: '/transport_bicycle',
    name: 'bicycle',
    component: bicycle,
    meta: { title: `${DOMAIN_TITLE} | Bicycle`, layout: 'default' }
  },

  {
    path: '/transport',
    name: 'transport',
    component: purchaseNew,
    meta: { title: `${DOMAIN_TITLE} | Cars`, layout: 'default' }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detailTransport,
    meta: { title: `${DOMAIN_TITLE} | Detail`, layout: 'default' }
  },

  {
    path: '/sell-step',
    name: 'sell-step',
    component: sellStep,
    meta: { title: `${DOMAIN_TITLE} | Sell Step`, layout: 'default' }
  },
  {
    path: '/purchase-new',
    name: 'purchaseNew',
    component: purchaseNew,
    meta: { title: `${DOMAIN_TITLE} | Purchase New`, layout: 'default' }
  },
  {
    path: '/service',
    name: 'service',
    component: service,
    meta: { title: `${DOMAIN_TITLE} | Service`, layout: 'default' }
  },

  {
    path: '/confirm-register',
    name: 'confirmRegister',
    component: confirmRegister,
    meta: { title: `${DOMAIN_TITLE} | Xác nhận đăng ký`, layout: 'default' }
  }
  
]
