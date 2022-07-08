
var default_numbers = ' hai ba bốn năm sáu bảy tám chín'
  
var units = ('1 một' + default_numbers).split(' ')
var ch = 'lẻ mười' + default_numbers
var tr = 'không một' + default_numbers
var tram = tr.split(' ')
var u = '2 nghìn triệu tỉ'.split(' ')
var chuc = ch.split(' ')

export function convert_price_to_text (price) {
  const str = String(price)
  let i = 0
  const arr = []
  let index = str.length
  const result = []
  var string = ''
  if (index === 0 || str === 'NaN') return ''
  while (index >= 0) {
    arr.push(str.substring(index, Math.max(index - 3, 0)))
    index -= 3
  }
  for (i = arr.length - 1; i >= 0; i--) {
    // eslint-disable-next-line no-lone-blocks
    {
      if (arr[i] !== '' && arr[i] !== '000') {
        result.push(block_of_three(arr[i]))
      }
      if (u[i]) result.push(u[i])
    }
  }

  string = result.join(' ')
  // remove unwanted white space
  return string.replace(/[0-9]/g, '').replace(/ {2}/g, ' ').replace(/ $/, '') + ' đồng'
}

function block_of_three (d) {
  const _a = d + ''
  if (d === '000') return ''
  switch (_a.length) {
    case 0:
      return ''
    case 1:
      return units[_a]
    case 2:
      return tenth(_a)
    case 3:
      // eslint-disable-next-line no-case-declarations
      let sl12 = ''
      if (_a.slice(1, 3) !== '00-') sl12 = tenth(_a.slice(1, 3))
      // eslint-disable-next-line no-case-declarations
      const sl13 = `${tram[_a[0]]} trăm`
      return sl13 + ' ' + sl12
  }
}

function tenth (a) {
  // eslint-disable-next-line no-unused-vars
  let s11 = units[a[1]]
  const s12 = chuc[a[0]]
  let append = ''
  // eslint-disable-next-line eqeqeq
  if (a[0] > 0 && a[1] == 5) {
    s11 = 'lăm'
  }
  if (a[0] > 1) {
    append = ' mươi'
    if (a[1] === 1) s11 = ' mốt'
  }
  const str = s12 + '' + append + ' ' + s11
  return str
}
