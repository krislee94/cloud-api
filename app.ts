import {Application} from 'egg';

export default (app:Application) => {

    //健康检查
    app['beforeClose'](()=>{
        return new Promise(resolve => {
            app.locals.isCloseing = true;
            setTimeout(resolve,5000);
        });
    });
}