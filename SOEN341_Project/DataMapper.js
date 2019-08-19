const models = require('./models');
const gateway = require('./Gateway');

class DataMapper {

    //seef
    static login_Admin(user, password, callback) {
        const admin = new models.Admin(null, null, user, password, null, null);
        gateway.login_Admin(admin.getUserName(), admin.getPassword(), function (type) {
            if (type === 'success')
                callback('success');
            else if (type === 'error')
                callback('error');
            else
                callback('error1');
        });
    }

    //seef
    static insert_Admin(FirstName, LastName, user, password, Email, PhoneNumber, callback) {
        const admin = new models.Admin(FirstName, LastName, user,
            password, Email, PhoneNumber);

        gateway.insert_Admin(admin.getFirstName(), admin.getLastName(), admin.getUserName(), admin.getPassword(),
            admin.getEmail(), admin.getPhoneNumber(), function (type) {
                if (type === 'errorduplicate') {
                    callback('errorduplicate');
                }
                else if (type === 'success') {
                    callback('success')
                }
                else
                    callback('error');
            });
    }

    //akhil
    static viewActiveUsers(callback) {
        gateway.viewUsers(function (type, result) {
            if (type === 'success') {
                callback('success', result);
            }
            else
                callback('error', null);
        })
    }

    //nayan
    static insert_Student(FirstName, LastName, UserName, Password, Email, PhoneNumber, callback) {
        const student = new models.Student(FirstName, LastName, UserName, Password, Email, PhoneNumber);

        gateway.insert_Student(student.getFirstName(), student.getLastName(), student.getUserName(), student.getPassword(),
            student.getEmail(), student.getPhoneNumber(), function (type) {
                if (type === 'success')
                    callback('success');
                else if (type === 'error')
                    callback('error');
                else
                    callback('errorunique');
            });
    }

    //nayan
    static login_Student(UserName, Password, callback) {
        const student = new models.Student(null, null, UserName, Password, null, null);

        gateway.login_Student(student.getUserName(), student.getPassword(), function (type) {
            if (type === 'success')
                callback('success');
            else if (type === 'error')
                callback('error');
            else
                callback('error1');
        })
    }

    //jaskaran
    static create_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13,Copies, callback) {
        const book = new models.Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, null);
       
        gateway.insert_Book(book.getTitle(), book.getAuthor(), book.getFormat(), book.getPages(), book.getPublisher(),
            book.getLanguage(), book.getISBN10(), book.getISBN13(),Copies, function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            })
    }

//himalaya
    static create_Magazine(Title, Language, Publisher, ISBN10, ISBN13,Copies, callback) {
        const magazine = new models.Magazine(Title, Language, Publisher, ISBN10, ISBN13, null);
        gateway.insert_Magazine(magazine.getTitle(), magazine.getLanguage(), magazine.getPublisher(),
            magazine.getISBN10(), magazine.getISBN13(), Copies,function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            });
    }

    //hasan
    static create_Music(Type, Title, Artist, Label, Release_Date, ASIN, Copies,callback) {
        const music = new models.Music(Type, Title, Artist, Label, Release_Date, ASIN, null);
        gateway.insert_Music(music.getType(), music.getTitle(), music.getArtist(), music.getLabel(), music.getRelease_Date(),
            music.getASIN(), Copies,function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            })
    }

    //claudia
    static create_Movie(Title, Director, Producers, Actors, Language, Subtitles, Dubbed, Release_Date, Run_Time, Copies, callback) {
        const movie = new models.Movie(Title, Director, Producers, Actors, Language, Subtitles, Dubbed, Release_Date, Run_Time, null);
        gateway.insert_Movie(movie.getTitle(), movie.getDirector(), movie.getProducers(), movie.getActors(),
            movie.getLanguage(), movie.getSubtitles(), movie.getDubbed(), movie.getRelease_Date(), movie.getRun_Time(), Copies,function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            });
    }

    //nayan
    static show(entry, callback) {
        gateway.show(entry, function (type, result) {
            if (type === 'success') {
                callback('success', result)
            }
            else
                callback('error', null);
        });
    }

    //akhil
    static delete(entry, id, callback) {
        gateway.delete(entry, id, function (type) {
            if (type === 'success') {
                callback('success')
            }
            else
                callback('error');
        });
    }

    //jaskaran
    static update_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, id, callback) {
        const book = new models.Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, id);

        gateway.update_Book(book.getTitle(), book.getAuthor(), book.getFormat(), book.getPages(), book.getPublisher(),
            book.getLanguage(), book.getISBN10(), book.getISBN13(), book.getID(), function (type) {
                if (type === 'success') {
                    callback('success');
                }
                else
                    callback('error');
            })
    }

    //himalaya
    static update_Magazine(Title, Language, Publisher, ISBN10, ISBN13, id, callback) {
        const magazine = new models.Magazine(Title, Language, Publisher, ISBN10, ISBN13, id);
        gateway.update_Magazine(magazine.getTitle(), magazine.getLanguage(), magazine.getPublisher(), magazine.getISBN10()
            , magazine.getISBN13(), magazine.getID(), function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            })
    }

    //claudia
    static update_Movie(Title, Director, Producers, Actors, Language, Subtitles, Dubbed, Release_Date, Run_Time, id, callback) {

        const movie = new models.Movie(Title, Director, Producers, Actors, Language, Subtitles, Dubbed,
            Release_Date, Run_Time, id);

        gateway.update_Movie(movie.getTitle(), movie.getDirector(), movie.getProducers(), movie.getActors(), movie.getLanguage(),
            movie.getSubtitles(), movie.getDubbed(), movie.getRelease_Date(), movie.getRun_Time(), movie.getID(), function (type) {
                if (type === 'success')    
                {
                    callback('success');}
                else
                {
                    callback('error');
                }
                    
            })
    }

    //hasan
    static update_Music(Type, Title, Artist, Label, Release_Date, ASIN, id, callback) {
        const music = new models.Music(Type, Title, Artist, Label, Release_Date, ASIN, id);
        gateway.update_Music(music.getType(), music.getTitle(), music.getArtist(), music.getLabel(),
            music.getRelease_Date(), music.getASIN(), music.getID(), function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            })
    }

    //jaskaran
    static searchFilter_Book(query, filter, callback) {
        gateway.searchFilter_Book(query, filter, function (type, result) {
            if (type === 'success')
                callback('success',result);
            else
                callback('error',null);
        })
    }

    //himalaya
    static searchFilter_Magazine(query,filter,callback){
        gateway.searchFilter_Magazine(query, filter, function (type, result) {
            if (type === 'success')
                callback('success',result);
            else
                callback('error',null);
        })
    }

    //hasan
    static searchFilter_Music(query,filter,callback){
        gateway.searchFilter_Music(query, filter, function (type, result) {
            if (type === 'success')
                callback('success',result);
            else
                callback('error',null);
        })
    }

    //claudia
    static searchFilter_Movie(query,filter,callback){
        gateway.searchFilter_Movie(query, filter, function (type, result) {
            if (type === 'success')
                callback('success',result);
            else
                callback('error',null);
        })
    }
}

module.exports = DataMapper;