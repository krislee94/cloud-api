"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = () => {
    return async function bizerror(ctx, next) {
        try {
            await next();
        }
        catch (err) {
            console.log(err);
            ctx.app.logger.error(err);
            ctx.responseBizError(err);
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYml6ZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaXplcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sS0FBSyxVQUFVLFFBQVEsQ0FBQyxHQUFZLEVBQUUsSUFBSTtRQUMvQyxJQUFJO1lBQ0YsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUNkO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMifQ==