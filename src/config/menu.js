export const menu = [
  {
    icon: 'bx bx-calendar',
    title: 'Lịch làm việc',
    accId: 0,
    href: '/calendar',
    permission: 'CNPS_WKCLDR_GET_LIST_TASK_BY_USERID'
  },
  {
    icon: 'bx bx-calendar',
    title: 'Lịch làm việc AFS',
    accId: 1,
    href: '/calendar-afs',
    permission: 'CNPS_CALENDAR_AFS_LIST_ON_WEB'
  },
  {
    icon: 'bx bx-timer',
    title: 'Chấm công',
    accId: 2,
    listPermission: ['CNPS_ATTN_ATTENDANCE_LIST', 'CNPS_ATTN_ADD_GET_ALL_WEB'],
    child: [
      {
        title: 'Điểm danh',
        href: '/attendance',
        permission: 'CNPS_ATTN_ATTENDANCE_LIST'
      },
      {
        title: 'Chấm công bổ sung',
        href: '/timekeeping',
        permission: 'CNPS_ATTN_ADD_GET_ALL_WEB'
      }
    ]
  },
  {
    icon: 'bx bx-buildings',
    title: 'Merchant',
    accId: 3,
    listPermission: ['CNPS_CSTM_MERCHANT_LIST', 'CNPS_CSTM_MERCHANT_TRANSFER_HISTORY_VIEW', 'CNPS_LEAD_VIEW'],
    child: [
      {
        title: 'Danh sách Lead',
        href: '/leads',
        permission: 'CNPS_LEAD_VIEW'
      },
      {
        title: 'Danh sách Merchant',
        href: '/list-mc',
        permission: 'CNPS_CSTM_MERCHANT_LIST'
      },
      // {
      //   title: 'Điều chuyển',
      //   href: '/trans-mc',
      //   permission: 'CNPS_CSTM_MERCHANT_PRE_TRANSFER'
      // },
      {
        title: 'Điều chuyển MC',
        href: '/history-trans',
        permission: 'CNPS_CSTM_MERCHANT_TRANSFER_HISTORY_VIEW'
      }
    ]
  },
  // {
  //   icon: 'bx bx-buildings',
  //   title: 'Quản lý Agent',
  //   accId: 4,
  //   child: [
  //     {
  //       title: 'Danh sách',
  //       href: '/agent',
  //       permission: ''
  //     }
  //   ]
  // },
  {
    icon: 'bx bx-buildings',
    title: 'Quản lý cộng tác viên',
    accId: 5,
    listPermission: ['CNPS_AGENT_LIST', 'CNPS_CSTM_MERCHANT_CTV_VIEW', 'CNPS_CSTM_MERCHANT_CTV_ASSIGN_VIEW'],
    child: [
      {
        title: 'Danh sách',
        href: '/list-collaborators',
        permission: 'CNPS_AGENT_LIST'
      },
      // {
      //   title: 'Hợp đồng merchant CTV',
      //   href: '/manage-mc',
      //   permission: 'CNPS_CSTM_MERCHANT_LIST'
      // },
      {
        title: 'Merchant',
        href: '/assign-mc',
        permission: 'CNPS_CSTM_MERCHANT_CTV_ASSIGN_VIEW'
      },
      {
        title: 'Lịch sử gán merchant',
        href: '/history-assign-mc',
        permission: 'CNPS_CSTM_MERCHANT_CTV_ASSIGN_VIEW'
      }
    ]
  },
  {
    icon: 'bx bx-user-circle',
    title: 'Nhân viên',
    accId: 6,
    href: '/staff',
    permission: 'CNPS_SUR_STAFF_LIST'
  },
  {
    icon: 'bx bx-notepad',
    title: 'Hợp đồng',
    accId: 7,
    href: '/sales-manager',
    permission: 'CNPS_SCON_LIST'
  },
  {
    icon: 'bx bx-receipt',
    title: 'Phiếu thu',
    accId: 13,
    href: '/list-receipts',
    permission: 'SCON_RECEIPT_VIEW'
  },
  {
    icon: 'bx bx-cog',
    title: 'Cài đặt',
    accId: 8,
    listPermission: ['CNPS_CFG_ROLE_LIST'],
    child: [
      {
        title: 'Quyền',
        href: '/role',
        permission: 'CNPS_CFG_ROLE_LIST'
      }
    ]
  },
  {
    icon: 'bx bx-calendar',
    accId: 9,
    title: 'Báo cáo',
    listPermission: ['CNPS_ATTN_ATTENDANCE_EXPORT', 'CNPS_CSTM_MERCHANT_LIST_XLS', 'CNPS_WKCLDR_EXPORT', 'CNPS_SUMMARY_REPORT_XLS'],
    child: [
      {
        title: 'Báo cáo chấm công',
        href: '/report-attentdent',
        permission: 'CNPS_ATTN_ATTENDANCE_EXPORT'
      },
      {
        title: 'Báo cáo merchant',
        href: '/report-merchant',
        permission: 'CNPS_CSTM_MERCHANT_LIST_XLS'
      },
      {
        title: 'Báo cáo công việc',
        href: '/report-work',
        permission: 'CNPS_WKCLDR_EXPORT'
      },
      {
        title: 'Thống kê tổng hợp công việc của CVKD',
        href: '/report-work-cvkd',
        permission: 'CNPS_SUMMARY_REPORT_XLS'
      }
    ]
  },
  {
    icon: 'bx bx-map-pin',
    title: 'Tracking',
    accId: 10,
    href: '/tracking',
    permission: 'CNPS_TKLC_SEARCH'
  },
  {
    icon: 'bx bx-user-circle',
    title: 'Marketing',
    accId: 11,
    href: '/landing-marketing',
    permission: ''
  },
  {
    icon: 'bx bx-buildings',
    title: 'MC Landing',
    accId: 12,
    href: '/mc-landing',
    permission: 'CNPS_CSTM_LANDING_UNDEFINED_VIEW'
  }
]
