"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
exports.default = (appInfo) => {
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1592274920882_6241";
    // add your middleware config here
    // config.middleware = ['bizerror'];
    // add your user config here
    const userConfig = {
    // myAppName: 'egg',
    };
    //egg自带安全协议。csrf
    config.security = {
        csrf: {
            enable: false,
        },
        xframe: {
            enable: false,
        },
        domainWhiteList: ["http://localhost:3000"],
    };
    config.cors = {
        //@ts-ignore
        origin: (ctx) => {
            return ctx.get("Origin");
        },
        //@ts-ignore
        credentials: true,
        allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    };
    config.onerror = {
        all(err, ctx) {
            ctx.body = err;
            ctx.status = 500;
        },
        html(err, ctx) {
            ctx.body = `<h3>${err}</h3>`;
            ctx.status = 500;
        },
        json(err, ctx) {
            ctx.body = { message: err };
            ctx.status = 500;
        },
    };
    return Object.assign(Object.assign({}, config), userConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBOztHQUVHO0FBQ0gsa0JBQWUsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDckMsTUFBTSxNQUFNLEdBQUcsRUFBbUIsQ0FBQztJQUVuQyx1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRW5ELGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFFcEMsNEJBQTRCO0lBQzVCLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLG9CQUFvQjtLQUNyQixDQUFDO0lBRUYsZ0JBQWdCO0lBQ2hCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUNELE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7UUFDRCxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUMzQyxDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLFlBQVk7UUFDWixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNkLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsWUFBWTtRQUNaLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFlBQVksRUFBRSx3Q0FBd0M7S0FDdkQsQ0FBQztJQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDZixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUc7WUFDVixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNmLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7WUFDWCxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDN0IsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRztZQUNYLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDNUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsQ0FBQztLQUNGLENBQUM7SUFFRix1Q0FDSyxNQUFNLEdBQ04sVUFBVSxFQUNiO0FBQ0osQ0FBQyxDQUFDIn0=