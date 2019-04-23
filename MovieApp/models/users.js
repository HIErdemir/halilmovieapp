class Users {

    constructor() {
        this._db = []
    }
    // The C in Crud. Ter illustratie een optionele callback
    create(user, cb = null) {
        this._db.push(user);
        if( cb !== null ) {
            cb(null, 'ok');
        }
    }

    // The R in cRud - find all
    readAll(cb) {
        cb(null, this._db);
    }

    // The R in cRud - find on movie.id 
    read(id, cb) {
        this._db.find( (user) => {
            if( user.id === id) {
                cb(null, user);
            }
        });
    }
}
module.exports = Users