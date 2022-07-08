/**
 * import and init third party
 * components/validators and other dependencies
 */

import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
// eslint-disable-next-line no-useless-escape
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexUsername = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹếẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/
const regexNumber = /^[0-9]+$/
const regexMobile = /^((09|03|07|08|05)+([0-9]{8})\b)$/
// const regexMobile = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

// install rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

extend('required', value => {
  if (value) {
    return true
  }

  return '{_field_} không được để trống'
})

extend('username', value => {
  const check = regexUsername.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} không đúng định dạng'
  }
  if (check) {
    return true
  }

  return '{_field_} là bắt buộc nhập'
})

extend('minMAxName', value => {
  if (value.length > 3 && value.length < 255) {
    return true
  }
  return '{_field_} Ký tự nhỏ nhất là 3 và lớn nhất 255 ký tự'
})

extend('mail', value => {
  if (value.length < 3 && value.length > 255) {
    return '{_field_} Ký tự nhỏ nhất là 3 và lớn nhất 255 ký tự'
  }
  const check = re.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} không đúng định dạng'
  }
  if (check) {
    return true
  }
})

extend('regexNumber', value => {
  const check = regexNumber.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} chỉ được nhập số'
  }
  if (check) {
    return true
  }
})

extend('phoneRex', value => {
  if (value.length > 50) {
    return '{_field_} Số điện thoại tối đa 50 kí tự'
  }
  if (value.length > 1 && value.length < 50) {
    return true
  }
  return '{_field_} là bắt buộc nhập'
})

extend('phoneLimit', value => {
  if (value.length >= 50) {
    return '{_field_} tối đa 50 kí tự'
  }
  if (value.length > 1 && value.length < 50) {
    return true
  }
})

extend('requiredDate', value => {
  if (value.startDate && value.endDate) {
    return true
  }

  return '{_field_} là bắt buộc nhập'
})

extend('minMAxAgentName', value => {
  if (value.length > 2 && value.length < 50) {
    return true
  }
  return '{_field_} Ký tự nhỏ nhất là 2 và lớn nhất 50 ký tự'
})

extend('regexMobile', value => {
  const check = regexMobile.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} không đúng định dạng'
  }
  if (check) {
    return true
  }
})

extend('serialPR02', value => {
  const check = (String(value)).substr(0, 4) === 'MPOS' && !(String(value)).includes(' ')
  if (!check) {
    return '{_field_} không đúng quy định'
  }
  if (check) {
    return true
  }
})

extend('serialSmartPOS', value => {
  const check = (String(value)).substr(0, 2) === 'SP' && !(String(value)).includes(' ')
  if (!check) {
    return '{_field_} không đúng quy định'
  }
  if (check) {
    return true
  }
})

extend('serialRest', value => {
  const check = !(String(value)).includes(' ')
  if (!check) {
    return '{_field_} không đúng quy định'
  }
  if (check) {
    return true
  }
})

extend('minMaxName_2', value => {
  if (value.length >= 2 && value.length <= 100) {
    return true
  }
  return '{_field_} Ký tự nhỏ nhất là 2 và lớn nhất 100 ký tự'
})

extend('maxReceipt_2', value => {
  if (value.length >= 0 && value.length <= 255) {
    return true
  }
  return '{_field_} lớn nhất là 255 ký tự'
})

extend('mail_2', value => {
  if (value.length < 2 && value.length > 100) {
    return '{_field_} Ký tự nhỏ nhất là 2 và lớn nhất 100 ký tự'
  }
  const check = re.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} không đúng định dạng'
  }
  if (check) {
    return true
  }
})
