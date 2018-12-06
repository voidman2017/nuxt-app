export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
   consola.info(`\n====== 请求开始======\n ${JSON.stringify(config.url)}`)
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  });

  $axios.onResponse(response => {
    const { data } = response;
    consola.success(`\n====== 请求响应====== ${JSON.stringify( data )} \n====== 请求结束 ======`)
  })
}
