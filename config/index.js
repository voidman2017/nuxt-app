import development from './conf.development';
import production from './conf.production';
const env = process.env.NODE_ENV;
let conf ;
if(env === 'development'){
  conf = development;
}else if(env === 'production'){
  conf = production;
}
export default conf;
