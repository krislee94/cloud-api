"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class personalizedController extends egg_1.Controller {
    async getPersonalizeList() {
        //
        const result = await this.ctx.service.personalized.getPersonalizeList(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
    async getPersonalizedMVList() {
        const result = await this.ctx.service.personalized.getPersonalizedMVList();
        this.ctx.response.success(result);
    }
}
exports.default = personalizedController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWxpemVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQWlDO0FBRWpDLE1BQXFCLHNCQUF1QixTQUFRLGdCQUFVO0lBQ3JELEtBQUssQ0FBQyxrQkFBa0I7UUFDN0IsRUFBRTtRQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGtCQUFrQixtQkFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN4QixDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxLQUFLLENBQUMscUJBQXFCO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQWZELHlDQWVDIn0=