import mongoose from "mongoose";

export const initMongoDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://slobodynuk777:HP3QPV2xCDurPvqm@slobosyncsolutions.hp2hs.mongodb.net/?retryWrites=true&w=majority&appName=SloboSyncSolutions`,
      );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
