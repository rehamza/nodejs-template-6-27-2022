import 'dotenv/config';
import app from './app';
import { connectDB } from './config/connectDB';


connectDB();

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), () => {
    console.log(`Listening to requests on http://localhost:${app.get('port')}`);
  });