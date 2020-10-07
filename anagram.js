// LOGIC TEST

// Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan sama eg. 'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram.
// Dibawah ini ada array berisi sederetan Strings.

// ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
// Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok Anagramnya,


const anagram = (payload) => {
  let datas = payload
  let result = []

  const sorting = (data) => {
    let word = data.split('')
    for(let i = 0; i < word.length - 1; i++) {
      if(word[i] && word[i + 1] && word[i].charCodeAt(0) > word[i + 1].charCodeAt(0)) {
        let temp = word[i]
        word[i] = word[i + 1]
        word[i + 1] = temp;
        i = -1;
      }
    }
    return word.join('')
  }

  while (datas.length > 0) {
    let resTemp = [datas[0]]
    datas.splice(0, 1)

    for(let k = 0; k < datas.length; k++) {
      if(sorting(resTemp[0]) === sorting(datas[k])) {
        resTemp.push(datas[k])
        datas.splice(k, 1)
        k -= 1
      }
    }
    result.push(resTemp)
  }

  console.log(result)
  return result
}

const payload = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

anagram(payload)
