export default {
  configGender: [{
    id: 'MALE', text: 'Nam'
  },
  {
    id: 'FEMALE', text: 'Nữ'
  }],

  optionCity: [
    { id: false, text: 'Tất cả' }
  ],

  optionUserStatus: [
    {
      id: 0,
      text: 'Tất cả'
    },
    {
      id: 'ACTIVE',
      text: 'Hoạt động'
    },
    {
      id: 'INACTIVE',
      text: 'Khóa'
    }
  ],

  businessFields: [
    {
      code: 'BAN_LE',
      name: 'BÁN LẺ'
    },
    {
      code: 'BAO_HIEM',
      name: 'BẢO HIỂM'
    },
    {
      code: 'BAN_LE',
      name: 'BÁN LẺ'
    },
    {
      code: 'CO_KHI_XAY_DUNG',
      name: 'CƠ KHÍ - XÂY DỰNG'
    },
    {
      code: 'DICH_VU',
      name: 'DỊCH VỤ'
    },
    {
      code: 'DICH_VU_CONG_N.G.O',
      name: 'DỊCH VỤ CÔNG - N.G.O'
    },
    {
      code: 'DICH_VU_GIAI_TRI',
      name: 'DỊCH VỤ GIẢI TRÍ'
    },
    {
      code: 'DIEN_TU_CONG_NGHE',
      name: 'ĐIỆN TỬ - CÔNG NGHỆ'
    },
    {
      code: 'DU_LICH',
      name: 'DU LỊCH'
    },
    {
      code: 'DV_VAN_TAI',
      name: 'DV VẬN TẢI'
    },
    {
      code: 'FITNESS',
      name: 'YOGA - FITNESS'
    },
    {
      code: 'GIAO_DUC_DAO_TAO',
      name: 'GIÁO DỤC - ĐÀO TẠO'
    },
    {
      code: 'KHACH_SAN',
      name: 'KHÁCH SẠN - LƯU TRÚ'
    },
    {
      code: 'NHA_HANG',
      name: 'NHÀ HÀNG'
    },
    {
      code: 'NOI_THAT',
      name: 'NỘI THẤT'
    },
    {
      code: 'OTHER',
      name: 'KHÁC'
    },
    {
      code: 'OTO_XE_MAY_XE_DAP',
      name: 'Ô TÔ - XE MÁY'
    },
    {
      code: 'THAM_MY',
      name: 'SPA - THẨM MỸ'
    },
    {
      code: 'THOI_TRANG_MY_PHAM',
      name: 'THỜI TRANG - MỸ PHẨM'
    },
    {
      code: 'XANG_DAU_KHI_DOT',
      name: 'XĂNG DẦU - KHÍ ĐỐT'
    },
    {
      code: 'Y_TE',
      name: 'Y TẾ'
    }
  ],

  optionComphase: [
    { id: false, text: 'Tất cả' },
    { id: 'PROBATION', text: 'Thử việc' },
    { id: 'OFFICIAL', text: 'Chính thức' }
  ],

  listStatusContract: [
    { id: false, text: 'Tất cả' },
    {
      id: 'NEW',
      text: 'Mới tạo'
    },
    {
      id: 'WAITING_APPROVED_FEE',
      text: 'Chờ duyệt phí'
    },
    {
      id: 'APPROVED_FEE',
      text: 'Đã duyệt phí'
    },
    {
      id: 'LIQUIDATE',
      text: 'Thanh lý'
    },
    {
      id: 'EXPERTISE',
      text: 'Thẩm định - Chưa HĐ'
    },
    {
      id: 'SENT',
      text: 'Đã gửi MC'
    },
    {
      id: 'WAITING_SIGN',
      text: 'Chờ ký'
    },
    {
      id: 'SIGNING',
      text: 'Đang ký'
    },
    {
      id: 'SIGNED_MISS_IMAGE',
      text: 'Đã ký - Thiếu ảnh'
    },
    // {
    //   id: 'SIGNED',
    //   text: 'Đã ký'
    // },
    {
      id: 'SIGNED_WAITING_APPROVED',
      text: 'Đã ký - Chờ duyệt'
    },
    {
      id: 'APPROVED',
      text: 'Đã duyệt'
    },
    {
      id: 'REJECTED_SA',
      text: 'Bị từ chối SA'
    },
    {
      id: 'REJECTED_MC',
      text: 'Bị từ chối MC'
    },
    {
      id: 'REJECTED_MA',
      text: 'Bị từ chối MA'
    },
    {
      id: 'CANCELED',
      text: 'Đã hủy'
    },
    {
      id: 'EXPRIED',
      text: 'Hết hạn'
    },
    {
      id: 'ADDITIONAL',
      text: 'Cần bổ sung'
    }
  ],

  businessStateView: [
    'SIGNED_MISS_IMAGE',
    'SIGNED_WAITING_APPROVED',
    'APPROVED',
    'REJECTED_SA',
    'REJECTED_MC',
    'REJECTED_MA',
    'CANCELED',
    'EXPRIED',
    'ADDITIONAL'
  ],

  listStatusMC: [
    {
      id: 'NEW',
      text: 'Mới tạo'
    },
    {
      id: 'POTENTIAL',
      text: 'Tiềm năng'
    },
    {
      id: 'HAS_CONTRACT',
      text: 'Hợp đồng'
    },
    {
      id: 'APPROVAL',
      text: 'Thẩm định'
    },
    {
      id: 'HANDOVER',
      text: 'Bàn giao'
    },
    {
      id: 'DONE',
      text: 'Hoàn thành'
    },
    {
      id: 'REJECT',
      text: 'Từ chối'
    }
  ],

  formContract: [
    {
      id: false,
      text: 'Tất cả'
    },
    {
      id: 'E_CONTRACT',
      text: 'Hợp đồng điện tử'
    },
    {
      id: 'PAPER_CONTRACT',
      text: 'Hợp đồng giấy'
    }],

  isDefaulValue: [{
    id: 0,
    text: 'Tất cả'
  },
  {
    id: false,
    text: 'Đề xuất'
  },
  {
    id: true,
    text: 'Mặc định'
  }],

  customerType: [
    { id: false, text: 'Tất cả' },
    { id: 'COMPANY', text: 'Doanh nghiệp' },
    { id: 'HOUSEHOLD', text: 'Hộ kinh doanh' },
    { id: 'INDIVIDUAL', text: 'Cá nhân' }
  ],

  transSale: ['SALE', 'AFTER_SALE', 'TELESALE', 'KEY_ACCOUNT'],

  saleLeader: ['SALE_MANAGER', 'SALE_LEADER', 'AFTER_SALE_LEADER', 'TELESALE_LEADER'],

  regionDirector: ['REGION_DIRECTOR'],

  superAdmin: ['SALE_DIRECTOR'],

  saleManager: ['SALE_LEADER', 'SALE_MANAGER', 'SALE_MANAGER', 'AFTER_SALE_LEADER', 'TELESALE_LEADER'],

  listAfterSale: ['AFTER_SALE_LEADER', 'AFTER_SALE'],

  listRegionManager: ['REGION_DIRECTOR', 'SALE_DIRECTOR'],

  saleAdmin: ['SALE_ADMIN'],

  stateAddtionTimekepping: [
    { id: 'NEW', text: 'Mới tạo' },
    { id: 'WAITING', text: 'Chờ duyệt' },
    { id: 'APRROVED', text: 'Đã duyệt' },
    { id: 'DENIED', text: 'Đã hủy' },
    { id: 'NOT_ACCEPT', text: 'Không xác nhận' },
    { id: 'ACCEPT', text: 'Xác nhận' }
  ],

  listTypeSale: [
    { id: 'REGION_DIRECTOR', text: 'Giám đốc vùng' },
    { id: 'SALE_MANAGER', text: 'Sale Manager' },
    { id: 'SALE_LEADER', text: 'Sale Leader' },
    { id: 'AFTER_SALE_LEADER', text: 'After Sale Leader' },
    { id: 'TELESALE_LEADER', text: 'Telesale Leader' },
    { id: 'SALE', text: 'Sale Man' },
    { id: 'SALE_ADMIN', text: 'Sale Admin' },
    { id: 'AFTER_SALE', text: 'After Sale' },
    { id: 'TELESALE', text: 'Telesale' },
    { id: 'KEY_ACCOUNT', text: 'Key Account' }
  ],

  typeAddanceTimeKepping: [
    {
      id: 'ATTN_ADD',
      text: 'Chấm công bổ sung'
    },
    {
      id: 'TAKE_LEAVE',
      text: 'Nghỉ phép'
    },
    {
      id: 'VACATION_MODE',
      text: 'Nghỉ chế độ(Khám thai, hiếu, hỉ, vợ sinh,...)'
    },
    {
      id: 'DEPARTMENT_POLICY',
      text: 'Nghỉ theo chính sách bộ phận'
    }
  ],

  listReason: [
    {
      id: 'FORGOT_ATTN',
      text: 'Quên chấm công'
    },
    {
      id: 'COMPANY_WORK',
      text: 'Việc công ty'
    },
    {
      id: 'PERSONAL_WORK',
      text: 'Việc cá nhân'
    }, {
      id: 'TIME_KEEPER_ERROR',
      text: 'Máy chấm công lỗi'
    }
  ],

  parameter_cell: {
    add_cy: 18000,
    add_cx: 36000,
    coefficient: 1000000
  },

  optionPolygonCleanup: {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    label: 'gfgdfgfgf'
  },

  localeData: {
    direction: 'ltr',
    format: 'dd/mm/yyyy',
    separator: ' - ',
    applyLabel: 'Áp dụng',
    cancelLabel: 'Hủy bỏ',
    weekLabel: 'W',
    daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    monthNames: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12'
    ],
    firstDay: 0
  },

  positionNexttech: { lat: 20.99491, lng: 105.86184 },

  listServiceTypes: {
    NEXT_SHOP: 'NextShop',
    NEXT_PHAR: 'NextPhar',
    NEXT_ORDER: 'NextOrder',
    OMI_SELL: 'Omisell',
    MY_SPA: 'MySpa',
    POS_APP: 'PosApp',
    NEXT_ACC: 'NextAcc'
  },

  listNameDevice: {
    SMART_POS: 'SmartPOS',
    PR_01: 'PR 01',
    PR_02: 'PR 02'
  }
}
