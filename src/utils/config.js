const DEV = {
  backend: 'https://devvendor.pgxcloud.com/v1',
  qingstor: 'https://pgxcloud-upload-dev.pek3a.qingstor.com',
  urlPrefix: '/public'
}

const PROD = {
  backend: 'https://vendor.pgxcloud.com/v1',
  qingstor: 'https://pgxcloud-store-prod.pek3a.qingstor.com',
  urlPrefix: '/public'
}

export default __PROD__ ? PROD : DEV
