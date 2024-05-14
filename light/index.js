let params = {
  a : 4,      //? длина
  b : 6,      //? ширина
  s : 0,      //? площадь
}

let fluxParams = {
  ...params,
  n : 6,      //? Количество светильников
  f : 1800,   //? Световой поток одной лампы (1200-2400)
  nk : 0.6,   //? Коэффициент использования светового потока (0.6 среднее)
  kz : 1.4    //? Коэффициент запаса (1.4 среднее)
}

function light(params) {
  let { a, b, s, n, f, nk, kz } = params

  s === 0 ? s = a * b : s

  return (n * f * nk) / (s * kz)
}

console.log(`Расчет освещенности для кабинета: ${light(fluxParams).toFixed(1)} ЛК (${light(fluxParams)})`)

let noiseParams = {
  ...params,
  n1 : 11,  //? Количество источников шума первого типа (компьютеров)
  L1 : 40,  //? Уровень шума одного компьютера, дБА
  n2 : 1,   //? Количество источников шума второго типа (принтеров)
  L2 : 55   //? Уровень шума одного принтера, дБА
}

function noise(params) {
  let { n1, L1, n2, L2 } = params
  return 10 * Math.log10(n1 * 10**(L1 / 10) + n2 * 10**(L2 / 10))
}

console.log(`Расчет шума для кабинета: ${noise(noiseParams).toFixed(1)} дБА (${noise(noiseParams)})`)