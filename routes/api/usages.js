/**
 * @param {{addUsage: *, post: *}} app
 */
module.exports = function(app){
    app.post('/api/usages', function(req, res){
        const usage = req.body; // TODO: validate

        app.addUsage(usage)
        .then((writeResult) => {
            res.status(201).json({ id:usage._id });
        })
        .catch((err) => {
            if (err) {
                // TODO: log error
                res.status(500).send(); // TODO: add proper error handling
            }
        });
    });
}
