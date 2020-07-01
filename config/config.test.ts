
import { DefaultConfig } from './config.default';

export default ()=>{
    const config = {} as DefaultConfig;
    config.middleware = ['errorHandler'];
    config.errorHandler = {
        match:'/'
    }
    return {
        ...config
    }
}