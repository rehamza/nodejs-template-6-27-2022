require('dotenv').config()
import mongoose from 'mongoose';

const username =  process.env.username;
const password =  process.env.password;
const cluster =  process.env.cluster;
const dbname = process.env.dbname;
const currentEnv = process.env.environment;

let url;
let options = {};

if(currentEnv == "development"){
   url =  `mongodb://localhost:27017/${dbname}`
}else{
    url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
    options = {
      ssl: true,
      sslValidate: true,
      dbName: dbname
    };
}


export const connectDB = async () => {
  return new Promise((res, rej) => {
    try {
      mongoose.connect(
        url,
        {
          ...options,
          useNewUrlParser: true,
          useUnifiedTopology: currentEnv !== 'production'
        },
        err => {
          if (err) {
            // eslint-disable-next-line no-console
            console.log('databse error', err.message);
            rej(err.message);
            process.exit(1);
          } else {
            // eslint-disable-next-line no-console
            console.log(
              `Successfully connected to mongodb at env: ${currentEnv} and at ${url}`
            );
            res('DB Connected');
          }
        }
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Database error', e.message);
      rej(e.message);
      process.exit(1);
    }
  });
};


