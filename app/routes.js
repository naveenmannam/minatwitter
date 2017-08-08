module.exports = function(app) {
    app.get("/", function(req, res) {
        res.send("This is the home page");
    });
    app.get("/top", function(req, res) {
        res.send("This is the top page");
    });
    app.get("/results", function(req, res) {
        res.send("This is the result page");
    });
    app.get("/api/results", function(req, res) {
        res.json({
            message: "This is the API page"
        });
    });
};