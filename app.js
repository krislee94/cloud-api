"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    //健康检查
    app['beforeClose'](() => {
        return new Promise(resolve => {
            app.locals.isCloseing = true;
            setTimeout(resolve, 5000);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWUsQ0FBQyxHQUFlLEVBQUUsRUFBRTtJQUUvQixNQUFNO0lBQ04sR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtRQUNuQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM3QixVQUFVLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEifQ==