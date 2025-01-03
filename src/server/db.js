<<<<<<< HEAD
const mongoose = require('mongoose');
const mongoURI =  "mongodb://root:bAqJvZ4Qvq0mTH352mpcgeC5@172.21.112.193:27017";
=======
import { connect } from 'mongoose';
const mongoURI =  "mongodb://root:UvWC19XT44OD9RE0luEIZrVF@172.21.63.185:27017";
>>>>>>> 783977b1226129bbefb5dd26bc2356ac2d41943b

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    try {
        await connect(mongoURI, { dbName: 'stayhealthybeta1'});
        console.info('Connected to Mongo Successfully')

        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`)

        return await connectToMongo(nextRetryCount);

    }
};

export default connectToMongo;