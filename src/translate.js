import Axios from 'axios'

const translate = async (text) => {
  const data = await Axios.get(
    `https://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=${text}`
  )
  const res = await data.data.translateResult[0][0].tgt
  console.log(res)
  return res
}

export default translate
