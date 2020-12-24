// Integration test
const assert = require('Chai').assert;
const mongoose = require('mongoose');
const User = require('../models/user');
const Post = require('../models/post');
const ObjectId = mongoose.Types.ObjectId;

const crypto = require('crypto');


function connectToDatabase() {
    mongoose.connect('mongodb://localhost/blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => {
        assert.fail(err, "Something went wrong while connecting to the database.");
    });
}

describe('Mongo Connection', () => {
    it('Should connect to localhost successfully', (done) => {
        connectToDatabase();
        done();
    });
    it('Should create a post', (done) => {
        var post = new Post({
            title: 'This is a test post',
            author: new ObjectId(),
            body: 'This is the body of a test post.',
            updated: {
                updatedBy: 'Matthew',
                updatedDate: new Date()
            },
            comments: new ObjectId()
        });
        post.save((err) => {
            if (err) assert.fail(err);
            assert.isOk('Post successfully created.');
        });
        done();
    });
    it('Should create an admin user', (done) => {
        var user = new User({
            userName: 'Matthew',
            emailAddress: 'Balltop729@gmail.com',
            password: '^dIeYkniAsjpmKlz37!wz%8&^EEP3j0IpUO',
            updated: {
              updatedBy: 'Matthew',
              updatedDate: new Date(),
            }
        });

        user.save((err) => {
            if (err) assert.fail(err);
            assert.isOk('User successfully created');
        });
        done();
    });
});