var mangso = ['không', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function doc_hang_chuc (so, daydu) {
  var chuoi = ''
  var chuc = Math.floor(so / 10)
  var donvi = so % 10
  if (chuc > 1) {
    chuoi = ' ' + mangso[chuc] + ' mươi'
    if (donvi === 1) {
      chuoi += ' mốt'
    }
  } else if (chuc === 1) {
    chuoi = ' mười'
    if (donvi === 1) {
      chuoi += ' một'
    }
  } else if (daydu && donvi > 0) {
    chuoi = ' lẻ'
  }
  if (donvi === 5 && chuc > 1) {
    chuoi += ' lăm'
  } else if (donvi > 1 || (donvi === 1 && chuc === 0)) {
    chuoi += ' ' + mangso[donvi]
  }
  return chuoi
}
function doc_block (so, daydu) {
  var chuoi = ''
  var tram = Math.floor(so / 100)
  so = so % 100
  if (daydu || tram > 0) {
    chuoi = ' ' + mangso[tram] + ' trăm'
    chuoi += doc_hang_chuc(so, true)
  } else {
    chuoi = doc_hang_chuc(so, false)
  }
  return chuoi
}
function doc_hang_trieu (so, daydu) {
  var chuoi = ''
  var trieu = Math.floor(so / 1000000)
  so = so % 1000000
  if (trieu > 0) {
    chuoi = doc_block(trieu, daydu) + ' triệu'
    daydu = true
  }
  var nghin = Math.floor(so / 1000)
  so = so % 1000
  if (nghin > 0) {
    chuoi += doc_block(nghin, daydu) + ' nghìn'
    daydu = true
  }
  if (so > 0) {
    chuoi += doc_block(so, daydu)
  }
  return chuoi
}
export function number_to_text (so) {
  if (so === 0) return mangso[0]

  var chuoi = ''
  var hauto = ''

  do {
    var ty = so % 1000000000
    so = Math.floor(so / 1000000000)
    if (so > 0) {
      chuoi = doc_hang_trieu(ty, true) + hauto + chuoi
    } else {
      chuoi = doc_hang_trieu(ty, false) + hauto + chuoi
    }
    hauto = ' tỷ'
  } while (so > 0)
  return chuoi
}
