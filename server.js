"use strict";
const egg = require("egg");
const workers = Number(process.argv[2] || require("os").cpus().length);
egg.startCluster({
    workers,
    baseDir: __dirname,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFM0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZFLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDZixPQUFPO0lBQ1AsT0FBTyxFQUFFLFNBQVM7Q0FDbkIsQ0FBQyxDQUFDIn0=